function getItem(){
    const getitem = localStorage.getItem('jobID');
    if(getitem){
        return JSON.parse(getitem);
    }
    return [];
}

function setItem(id){
    const setitem = getItem();
    const exist = setitem.find(jobid => jobid=== id);
    if(!exist){
        setitem.push(id)
        localStorage.setItem('jobID', JSON.stringify(setitem))
    }
}

export { getItem, setItem };

