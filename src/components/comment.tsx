import Icon from "./icon"

interface CommentsProps {
    username: string,
    profileImg?: string,
    time: number,
    likes: number,
    comment: string
}

const Comment = (props: CommentsProps) => {
    return(
    <div className="mt-8">
        <div className="grid grid-cols-3 my-3 text-md">
            <div className="flex col-span-2 gap-2 items-center">
                <img src={props.profileImg} className="w-6 h-6"/>
                <span>{props.username}</span>
            </div>
            <div className="justify-self-end flex">{props.time} mins ago</div>
        </div>
        <div className="flex w-fit items-center">
            <Icon type={"like"} className="w-6 h-6 mr-1 text-primary-400 fill-current"/>
            {props.likes}
        </div>
        <div className="my-2">
            {props.comment}
        </div>
    </div>
    )
}

export default Comment;