// render chat templates to the DOM
// clear the list of chats (when the room changes)
class ChatUi {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = ``;
  }
  render(data) {
    const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
    <li class="list-group-item">
    <span class="username font-bold">${data.username}</span>
    <span class="message">${data.message}</span>
    <div class="time text-gray-300">${when}</div>
    </li>
      `;
    this.list.innerHTML += html;
  }
}

export { ChatUi };
