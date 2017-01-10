import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      posts : {}
    }
  }

  create(post){
    const posts = Object.assign({},this.state.posts);
    posts[post.id] = post;
    this.setState({posts})
  }

  delete(id){
    const posts = Object.assign({}, this.state.posts) 
    delete posts[id];
    this.setState({posts})
  }

  render(){
    return(
      <div>
        <SetPost post={this.post} isNew={true} create={(e)=>{this.create(e)}} />
        <Posts posts={this.state.posts} edit={(id,e)=>{this.edit(id, e)}}  create={(e)=>{this.create(e)}} delete={(id)=>{this.delete(id)}}/>
      </div>
    )
  }

}

const Posts = props => {
  return(
    <div className="posts-wrapper">
      {
        Object.keys(props.posts).map((post, index) => {
          return <Post key={index} data={props.posts[post]} id={post} create={(e)=>{props.create(e)}} edit={(id,e)=>{props.edit(id, e)}} delete={(id)=>{props.delete(id)}}/>
        })
      }
    </div>
  )
};


class Post extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      edit: false
    }
  }
  edit(){
    const state = !this.state.edit;
    this.setState({edit : state})
  }
  render(){
    return (
      <div className="post-wrapper">
        {
        this.state.edit 
        ? 
          <SetPost post={this.props.data} create={(e)=>{this.props.create(e)}} state={()=>{this.edit()}} isNew={false}/>
        : 
          <div>
            <h4>{this.props.data.title}</h4>
            <h6>{this.props.data.autor}</h6>
            <p>{this.props.data.message}</p>
            <button onClick={()=>{this.props.delete(this.props.id)}}>borrar</button>
            <button onClick={()=>{this.edit()}} className={`${this.state.edit ? "hide" : ""}`}>Editar</button>
          
          </div>
        }
        <button onClick={()=>{this.edit()}} className={`${!this.state.edit ? "hide" : ""}`}>Salir</button>
      </div>
    )
  }
}

class SetPost extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      post : {
        id: "",
        title: "",
        autor: "",
        message: ""
      },
    };
    this.setUpdate = this.setUpdate.bind(this);
    this.save = this.save.bind(this);
  }

  componentWillMount(){
    !this.props.isNew ? this.setState({post : this.props.post}) : "";
  }

  save(){
    this.props.create(this.state.post);
    let post = {id: "", title: "", autor: "", message: ""};
    !this.props.isNew ? this.props.state() : "";
    this.setState({post})
  }

  setUpdate(e){
    const post = Object.assign({}, this.state.post);
    post[e.target.dataset.type] = e.target.value;
    this.props.isNew ? post.id = Date.now() : "";
    this.setState({post})
  }

  render(){
    return(
      <div className={`create-wrapper ${this.props.isNew ? "new" : "edit"}`}>
        <div className="input-wrapper"> 
          <input data-type="title" value={this.state.post.title} placeholder="Titulo del post" onChange={this.setUpdate} type="text"/>
          <input data-type="autor" value={this.state.post.autor} placeholder="Autor del post" onChange={this.setUpdate} type="text"/>
        </div>
        <textarea data-type="message" value={this.state.post.message} placeholder="Contenido de Post" onChange={this.setUpdate} type="text"> </textarea>
        <button onClick={this.save} disabled={!(this.state.post.title && this.state.post.message)}>{this.props.isNew ? "Enviar" : "Guardar"}</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))

