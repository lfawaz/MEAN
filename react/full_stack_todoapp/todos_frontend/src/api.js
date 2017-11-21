const API_URL = "/api/todos/"

export async function getTodos(){
  return fetch(API_URL)
  .then(data => data.json())
  .then(data => {return data})

}

export async function addTodo(val){
  return   fetch(API_URL,{
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({name: val})
    }).then(function(res){
      return res.json()
    }).catch(function(err){
      console.log(err)
    }).then(newTodo => {
      return newTodo
    })
}
