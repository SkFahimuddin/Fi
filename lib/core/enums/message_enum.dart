enum MessageEnum { text, image, audio, video, gif }

extension ConvertMessage on String {
  MessageEnum toEnum() {
    switch (this) {
      case 'audio': return MessageEnum.audio;
      case 'image': return MessageEnum.image;
      case 'gif': return MessageEnum.gif;
      case 'video': return MessageEnum.video;
      default: return MessageEnum.text;
    }
  }
}