import '../../styles/ProjectDetails.css';

export function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="details">
            <div className='card'>
                <span>Project title - { id }</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi harum ab, laborum assumenda aliquam neque saepe voluptas exercitationem enim natus dignissimos eligendi nulla quasi aliquid temporibus libero suscipit nam iusto?</p>
            </div>
            <div className='foot'>
                <p>posted by the Net Ninja</p>
                <i>2nd Septwmber, 2am</i>
            </div>
        </div>
    );
}