export const EditTask = (props) => {

    const { onClear, id } = props;

    return (
        <>
            <i class="fa-solid fa-pen-to-square editBtn" onClick={() => {onClear(id)}}></i>
        </>
    );
}