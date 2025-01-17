export default function withPhoto(WrapperComponent) {
    return function ComponentWithPhoto(props) {
        return (
          <div>
            <img src={props.imageUrl} alt={props.alt} />
            <WrapperComponent {...props} />
          </div>
        );
    };
}