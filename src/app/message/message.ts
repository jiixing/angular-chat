/* tslint:disable:no-bitwise no-var-keyword typedef */
function uuid() {
  let i, random;
  let result = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      result += '-';
    }
    result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }

  return result;
};

export class Message {
  id: string;
  sentAt: Date;
  isRead: boolean;
  // author: User;
  text: string;
  // thread: Thread;

  constructor(obj?: any) {
    this.id              = obj && obj.id              || uuid();
    this.isRead          = obj && obj.isRead          || false;
    this.sentAt          = obj && obj.sentAt          || new Date();
    // this.author          = obj && obj.author          || null;
    this.text            = obj && obj.text            || null;
    // this.thread          = obj && obj.thread          || null;
  }
}
