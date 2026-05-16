const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");

admin.initializeApp();

exports.sendNotification = onDocumentCreated(
  "users/{userId}/chats/{chatId}/messages/{messageId}",
  async (event) => {
    const message = event.data.data();
    const receiverId = event.params.userId;
    const senderId = message.senderId;

    if (senderId === receiverId) return null;

    try {
      const receiverDoc = await admin
        .firestore()
        .collection("users")
        .doc(receiverId)
        .get();

      const fcmToken = receiverDoc.data()?.fcmToken;
      if (!fcmToken) return null;

      const senderDoc = await admin
        .firestore()
        .collection("users")
        .doc(senderId)
        .get();

      const senderName = senderDoc.data()?.name ?? "Fi";

      await admin.messaging().send({
        token: fcmToken,
        notification: {
          title: senderName,
          body: message.text,
        },
        android: {
          priority: "high",
          notification: {
            sound: "default",
          },
        },
      });

      return null;
    } catch (error) {
      console.error("Error sending notification:", error);
      return null;
    }
  }
);