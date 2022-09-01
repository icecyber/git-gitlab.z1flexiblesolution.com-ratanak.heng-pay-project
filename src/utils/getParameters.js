export function getParameters(props){
  try {
    const { match: { params } } = props;
    return params;
  } catch (error) {
    return false;
  }
}
