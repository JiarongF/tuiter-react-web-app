import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
const PostSummaryList = () => {
  return (`
           <ul class="list-group">
          ${post.map((w) => PostSummaryItem(w)).join("")}
           </ul>
`) }

export default PostSummaryList;