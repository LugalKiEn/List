const saveList = async (data) => {
    console.log("data", data);
    const result = await fetch('http://back/', {
        method: 'PATCH',
        body: JSON.stringify(data),
    })
    .then(response => response.json());
    return result;
    // .then(result => dispatch(addTask(result)));

}

export default saveList;