// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiItem, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const onEmojiTap = () => {
    onEmojiClick(id)
  }

  return (
    <li className="list-item-style">
      <button type="button" className="emoji-button-style" onClick={onEmojiTap}>
        <img src={emojiUrl} alt={emojiName} className="emoji-style" />
      </button>
    </li>
  )
}
export default EmojiCard
