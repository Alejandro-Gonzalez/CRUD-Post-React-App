/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      posts: {}
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'create',
	    value: function create(post) {
	      var posts = Object.assign({}, this.state.posts);
	      posts[post.id] = post;
	      this.setState({ posts: posts });
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(id) {
	      var posts = Object.assign({}, this.state.posts);
	      delete posts[id];
	      this.setState({ posts: posts });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(SetPost, { post: this.post, isNew: true, create: function create(e) {
	            _this2.create(e);
	          } }),
	        _react2.default.createElement(Posts, { posts: this.state.posts, edit: function edit(id, e) {
	            _this2.edit(id, e);
	          }, create: function create(e) {
	            _this2.create(e);
	          }, 'delete': function _delete(id) {
	            _this2.delete(id);
	          } })
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	var Posts = function Posts(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'posts-wrapper' },
	    Object.keys(props.posts).map(function (post, index) {
	      return _react2.default.createElement(Post, { key: index, data: props.posts[post], id: post, create: function create(e) {
	          props.create(e);
	        }, edit: function edit(id, e) {
	          props.edit(id, e);
	        }, 'delete': function _delete(id) {
	          props.delete(id);
	        } });
	    })
	  );
	};

	var Post = function (_React$Component2) {
	  _inherits(Post, _React$Component2);

	  function Post(props) {
	    _classCallCheck(this, Post);

	    var _this3 = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

	    _this3.state = {
	      edit: false
	    };
	    return _this3;
	  }

	  _createClass(Post, [{
	    key: 'edit',
	    value: function edit() {
	      var state = !this.state.edit;
	      this.setState({ edit: state });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: 'post-wrapper' },
	        this.state.edit ? _react2.default.createElement(SetPost, { post: this.props.data, create: function create(e) {
	            _this4.props.create(e);
	          }, state: function state() {
	            _this4.edit();
	          }, isNew: false }) : _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h4',
	            null,
	            this.props.data.title
	          ),
	          _react2.default.createElement(
	            'h6',
	            null,
	            this.props.data.autor
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.props.data.message
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                _this4.props.delete(_this4.props.id);
	              } },
	            'borrar'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: function onClick() {
	                _this4.edit();
	              }, className: '' + (this.state.edit ? "hide" : "") },
	            'Editar'
	          )
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: function onClick() {
	              _this4.edit();
	            }, className: '' + (!this.state.edit ? "hide" : "") },
	          'Salir'
	        )
	      );
	    }
	  }]);

	  return Post;
	}(_react2.default.Component);

	var SetPost = function (_React$Component3) {
	  _inherits(SetPost, _React$Component3);

	  function SetPost(props) {
	    _classCallCheck(this, SetPost);

	    var _this5 = _possibleConstructorReturn(this, (SetPost.__proto__ || Object.getPrototypeOf(SetPost)).call(this, props));

	    _this5.state = {
	      post: {
	        id: "",
	        title: "",
	        autor: "",
	        message: ""
	      }
	    };
	    _this5.setUpdate = _this5.setUpdate.bind(_this5);
	    _this5.save = _this5.save.bind(_this5);
	    return _this5;
	  }

	  _createClass(SetPost, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      !this.props.isNew ? this.setState({ post: this.props.post }) : "";
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      this.props.create(this.state.post);
	      var post = { id: "", title: "", autor: "", message: "" };
	      !this.props.isNew ? this.props.state() : "";
	      this.setState({ post: post });
	    }
	  }, {
	    key: 'setUpdate',
	    value: function setUpdate(e) {
	      var post = Object.assign({}, this.state.post);
	      post[e.target.dataset.type] = e.target.value;
	      this.props.isNew ? post.id = Date.now() : "";
	      this.setState({ post: post });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'create-wrapper ' + (this.props.isNew ? "new" : "edit") },
	        _react2.default.createElement(
	          'div',
	          { className: 'input-wrapper' },
	          _react2.default.createElement('input', { 'data-type': 'title', value: this.state.post.title, placeholder: 'Titulo del post', onChange: this.setUpdate, type: 'text' }),
	          _react2.default.createElement('input', { 'data-type': 'autor', value: this.state.post.autor, placeholder: 'Autor del post', onChange: this.setUpdate, type: 'text' })
	        ),
	        _react2.default.createElement(
	          'textarea',
	          { 'data-type': 'message', value: this.state.post.message, placeholder: 'Contenido de Post', onChange: this.setUpdate, type: 'text' },
	          ' '
	        ),
	        _react2.default.createElement(
	          'button',
	          { onClick: this.save, disabled: !(this.state.post.title && this.state.post.message) },
	          this.props.isNew ? "Enviar" : "Guardar"
	        )
	      );
	    }
	  }]);

	  return SetPost;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ }
/******/ ]);