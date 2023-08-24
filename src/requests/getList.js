const getList = async () => {
    const result = await fetch('http://back/', {
        method: 'GET',
    })
    .then(response => response.json());
    return result;
    // .then(result => dispatch(addTask(result)));

}

export default getList;
