(this["webpackJsonpreceipe-app"]=this["webpackJsonpreceipe-app"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(34),i=n.n(r),c=(n(89),n(21)),d=n(12),o=n(13),l=n(20),u=n(19),h=n(11),p=n(127),j=n(2),m=n(3),g=n(1),b=["user","component","render"],O=function(e){var t=e.user,n=e.component,a=e.render,s=Object(m.a)(e,b);return t&&a?Object(g.jsx)(h.b,Object(j.a)(Object(j.a)({},s),{},{render:a})):Object(g.jsx)(h.b,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return t?Object(g.jsx)(n,Object(j.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},f=n(69),x=(n(98),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleClose=function(){return a.setState({show:!1})},a.state={show:!0},a.timeoutId=null,a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,a=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(g.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:a})]})})}}]),n}(s.a.Component)),v=n(81),C=n(57),S=n(18),w=n(126),N=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(S.c,{to:"/recipes",className:"nav-link",children:"Recipes"}),Object(g.jsx)("div",{className:"cp-signout-div",children:Object(g.jsxs)(w.a,{children:[Object(g.jsx)(w.a.Toggle,{variant:"success",id:"dropdown-basic",children:"Manage Account"}),Object(g.jsxs)(w.a.Menu,{variant:"dark",children:[Object(g.jsx)(S.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(S.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]})]})})]}),y=Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(S.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(S.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),I=Object(g.jsx)(a.Fragment,{children:Object(g.jsx)(S.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),k=function(e){var t=e.user;return Object(g.jsxs)(C.a,{bg:"success",variant:"dark",expand:"md",children:[Object(g.jsx)(C.a.Brand,{children:Object(g.jsx)(S.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"Recipes.com"})}),Object(g.jsx)(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(C.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(g.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.userName]}),I,t?N:y]})})]})},R=n(7),A="https://shrouded-meadow-94851.herokuapp.com",U="http://localhost:4741",P="localhost"===window.location.hostname?U:A,q=n(36),T=n.n(q),D=function(e){return T()({url:P+"/sign-in/",method:"POST",data:{credentials:{userName:e.userName,password:e.password}}})},F=n(6),L=n(40),G=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(R.a)({},e.target.name,e.target.value))},a.onSignUp=function(e){e.preventDefault();var t,n=a.props,s=n.msgAlert,r=n.history,i=n.setUser;(t=a.state,T()({method:"POST",url:P+"/sign-up/",data:{credentials:{email:t.email,userName:t.userName,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return D(a.state)})).then((function(e){return i(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){a.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},a.state={email:"",userName:"",password:"",passwordConfirmation:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.userName,a=e.password,s=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(F.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(F.a.Group,{controlId:"email",children:[Object(g.jsx)(F.a.Label,{children:"Email address"}),Object(g.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"userName",children:[Object(g.jsx)(F.a.Label,{children:"User Name"}),Object(g.jsx)(F.a.Control,{required:!0,type:"userName",name:"userName",value:n,placeholder:"Create User Name",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"password",children:[Object(g.jsx)(F.a.Label,{children:"Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(F.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(F.a.Control,{required:!0,name:"passwordConfirmation",value:s,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),E=Object(h.f)(G),B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(R.a)({},e.target.name,e.target.value))},a.onSignIn=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.setUser;D(a.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({userName:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},a.state={userName:"",password:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(F.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(F.a.Group,{controlId:"userName",children:[Object(g.jsx)(F.a.Label,{children:"User Name"}),Object(g.jsx)(F.a.Control,{required:!0,type:"userName",name:"userName",value:t,placeholder:"Enter User Name",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"password",children:[Object(g.jsx)(F.a.Label,{children:"Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),M=Object(h.f)(B),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,a=e.clearUser;(function(e){return T()({url:P+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return a()}))}},{key:"render",value:function(){return""}}]),n}(a.Component),z=Object(h.f)(_),H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState(Object(R.a)({},e.target.name,e.target.value))},a.onChangePassword=function(e){e.preventDefault();var t=a.props,n=t.msgAlert,s=t.history,r=t.user;(function(e,t){return T()({url:P+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(a.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/")})).catch((function(e){a.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},a.state={oldPassword:"",newPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(F.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(F.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(F.a.Label,{children:"Old password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(F.a.Label,{children:"New Password"}),Object(g.jsx)(F.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{variant:"primary",type:"submit",children:"Submit"})]})]})})}}]),n}(a.Component),V=Object(h.f)(H),W=n(51),J=n(80),Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).getRecipes=function(e){return T()({url:P+"/recipes/find-recipes/",method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).catch(console.error)},a.updateRecipes=function(){a.getRecipes(a.props.user.token).then((function(e){a.setState({recipes:e.data.recipes})}))},a.createRecipe=function(e){var t=this;e.preventDefault();var n=this.props.msgAlert,a=this.state.ingredients,s=this.state.recipeName,r=this.state.steps;return T()({method:"POST",url:P+"/recipes/new",data:{recipe:{name:s,ingredients:a,steps:r,owner:this.props.user}}}).then((function(e){return t.state.recipes.push(e.data.recipe)})).then((function(){t.setState({recipeName:"",ingredients:[{ingredientName:"",qty:"",units:""}],steps:[""]}),n({heading:"Recipe Created",message:"Recipe Created",variant:"success"})})).catch((function(e){t.setState({recipeName:"",ingredients:[{ingredientName:"",qty:"",units:""}],steps:[""]}),n({heading:"Failed to Create Recipe: "+e.message,message:"Failed to Create Recipe",variant:"danger"})}))},a.updateRecipe=function(e){e.preventDefault();var t=a.props.msgAlert,n=a.state.updatedIngredients,s=a.state.selectedRecipeId,r=a.state.updatedSteps;return T()({method:"PATCH",url:P+"/recipes/update/"+s,data:{recipe:{ingredients:n,steps:r}}}).then(a.setState({ingredientsToShow:a.state.updatedIngredients,stepsToShow:a.state.updatedSteps})).then((function(){t({heading:"Recipe Updated",message:"Recipe Updated",variant:"success"})})).then(a.componentDidMount())},a.handleFieldChange=function(e){if(["ingredientName","qty","units"].includes(e.target.name)){var t=Object(c.a)(a.state.ingredients);t[e.target.id][e.target.name]=e.target.value,a.setState({ingredients:t})}if(["steps"].includes(e.target.name)){var n=Object(c.a)(a.state.steps);n[e.target.id]=e.target.value,a.setState({steps:n})}else a.setState(Object(R.a)({},e.target.name,e.target.value))},a.handleUpdateFieldChange=function(e){if(["ingredientName","qty","units"].includes(e.target.name)){var t=Object(c.a)(a.state.updatedIngredients);t[e.target.id][e.target.name]=e.target.value,a.setState({updatedIngredients:t})}if(["updatedSteps"].includes(e.target.name)){var n=Object(c.a)(a.state.updatedSteps);n[e.target.id]=e.target.value,a.setState({updatedSteps:n})}else a.setState(Object(R.a)({},e.target.name,e.target.value))},a.addIngredient=function(e){e.preventDefault(),a.setState({ingredients:[].concat(Object(c.a)(a.state.ingredients),[{ingredientName:"",qty:"",unit:""}])})},a.addUpdateIngredient=function(e){e.preventDefault(),a.setState({updatedIngredients:[].concat(Object(c.a)(a.state.updatedIngredients),[{ingredientName:"",qty:"",units:""}])})},a.addStep=function(e){e.preventDefault(),a.setState({steps:[].concat(Object(c.a)(a.state.steps),[e.target.value])})},a.addUpdatedStep=function(e){e.preventDefault(),a.setState({updatedSteps:[].concat(Object(c.a)(a.state.updatedSteps),[e.target.value])})},a.handleChange=function(e){return a.setState(Object(R.a)({},e.target.name,e.target.value))},a.removeStep=function(e){a.state.steps.splice(e,1),a.setState({steps:a.state.steps})},a.removeUpdateStep=function(e){a.state.updatedSteps.splice(e,1),a.setState({steps:a.state.updatedSteps})},a.removeIngredient=function(e){a.state.ingredients.splice(e,1),a.setState({ingredients:a.state.ingredients})},a.removeUpdateIngredient=function(e){a.state.updatedIngredients.splice(e,1),a.setState({updatedIngredients:a.state.updatedIngredients}),a.updateRecipes(),a.componentDidMount()},a.deleteRecipe=function(e){var t=a.props.msgAlert,n=e.target.id,s=a.props.user._id,r=a.props.user.token;return T()({method:"DELETE",url:P+"/recipes/delete/"+s+"/"+n,headers:{Authorization:"Bearer ".concat(r)}}).then((function(){return t({heading:"Recipe Deleted",message:"Recipe Deleted",variant:"success"})})).then(a.componentDidMount())},a.addStep=a.addStep.bind(Object(W.a)(a)),a.addIngredient=a.addIngredient.bind(Object(W.a)(a)),a.createRecipe=a.createRecipe.bind(Object(W.a)(a)),a.state={recipeName:"",ingredients:[{ingredientName:"",qty:"",units:""}],steps:[""],recipes:[],recipeToShow:"",selectedRecipe:!1,selectedRecipeId:"",recipeToShowName:"",ingredientsToShow:[],stepsToShow:[],updatedIngredients:[{ingredientName:"",qty:"",units:""}],updatedSteps:[""],editRecipe:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateRecipes()}},{key:"render",value:function(){var e,t,n=this,a={listStyle:"none",color:"black",display:"flex",textAlign:"bottom",columnCount:"5",alignContent:"center",justifyContent:"center",alignItems:"center",justifyItems:"center"};e=this.state.editRecipe?Object(g.jsxs)(F.a,{onChange:this.handleUpdateFieldChange,onSubmit:this.updateRecipe,children:[Object(g.jsxs)(F.a.Group,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",onClick:this.addUpdateIngredient,children:"Add Ingredient"}),this.state.updatedIngredients.map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Ingredient Name",className:"input-form",required:!0,id:t.toString(),name:"ingredientName",defaultValue:n.state.updatedIngredients[t].ingredientName,onChange:n.handleChange}),Object(g.jsx)(F.a.Control,{type:"number",className:"input-form",required:!0,id:t.toString(),name:"qty",defaultValue:n.state.updatedIngredients[t].qty,placeholder:"Quantity",onChange:n.handleChange}),Object(g.jsx)(F.a.Control,{type:"text",placeholder:"units",className:"input-form",required:!0,id:t.toString(),name:"units",defaultValue:n.state.updatedIngredients[t].units,onChange:n.handleChange}),Object(g.jsx)(L.a,{variant:"danger",onClick:function(){return n.removeUpdateIngredient(t.toString())},children:"Remove"})]},t)}))]}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",type:"submit",onClick:this.updateRecipe,children:"Submit"})]}):null,t=this.state.editRecipe?Object(g.jsxs)(F.a,{onChange:this.handleUpdateFieldChange,onSubmit:this.updateRecipe,children:[Object(g.jsxs)(F.a.Group,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",onClick:this.addUpdatedStep,children:"Add Step"}),this.state.updatedSteps.map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Step",className:"input-form",required:!0,id:t.toString(),name:"updatedSteps",defaultValue:n.state.updatedSteps[t],onChange:n.handleChange}),Object(g.jsx)(L.a,{variant:"danger",onClick:function(){return n.removeUpdateStep(t)},children:"Remove"})]},t)}))]}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",type:"submit",onClick:this.updateRecipe,children:"Submit"})]}):null;var s=this.state.recipeName.setRecipeName;return this.state.selectedRecipe?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(L.a,{className:"editButton",variant:"dark",onClick:function(){return n.setState({selectedRecipe:!1})},children:"Back to Recipes"}),Object(g.jsx)(L.a,{className:"editButton",variant:"success",onClick:function(){return n.setState((function(e){return{editRecipe:!0,updatedIngredients:e.ingredientsToShow,updatedSteps:e.stepsToShow}}))},children:"Edit Recipe"}),Object(g.jsx)("h1",{children:this.state.recipeToShowName}),Object(g.jsxs)("div",{className:"edit-forms",children:[e,t]}),Object(g.jsxs)("ol",{children:[this.state.ingredientsToShow.sort((function(e,t){return e.ingredientName.toLowerCase()<t.ingredientName.toLowerCase()?-1:1})).map((function(e,t){return Object(g.jsxs)("li",{className:"ingredient-list",style:a,children:[Object(g.jsx)(J.a,{children:Object(g.jsxs)("div",{id:t,children:[e.ingredientName," ",e.qty," ",e.units]})}),Object(g.jsx)(J.a,{})]},e.index)})),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),this.state.stepsToShow.map((function(e){return Object(g.jsxs)("li",{className:"step-list",children:[Object(g.jsx)(J.a,{children:e}),Object(g.jsx)(J.a,{})]},e.name)}))]})]}):Object(g.jsx)("div",{children:Object(g.jsxs)(J.a,{className:"recipeCreate",children:[Object(g.jsxs)(F.a,{className:"recipeCard",onChange:this.handleFieldChange,children:[Object(g.jsxs)(F.a.Group,{children:[Object(g.jsx)(F.a.Label,{className:"form-label",children:"Create New Recipe"}),Object(g.jsx)(F.a.Control,{className:"input-form",required:!0,name:"recipeName",value:s,type:"recipeName",placeholder:"Recipe Name",onChange:this.handleChange})]}),Object(g.jsxs)(F.a.Group,{children:[Object(g.jsx)(F.a.Label,{className:"form-label",children:"Ingredients"}),Object(g.jsx)("br",{}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",onClick:this.addIngredient,children:"Add Ingredient"}),this.state.ingredients.map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Ingredient Name",className:"input-form",required:!0,id:t.toString(),name:"ingredientName",value:e.ingredientName,onChange:n.handleChange}),Object(g.jsx)(F.a.Control,{type:"number",className:"input-form",required:!0,id:t.toString(),name:"qty",value:e.qty,placeholder:"Quantity",onChange:n.handleChange}),Object(g.jsx)(F.a.Control,{type:"text",placeholder:"units",className:"input-form",required:!0,id:t.toString(),name:"units",value:e.units,onChange:n.handleChange}),Object(g.jsx)(L.a,{variant:"danger",onClick:function(){return n.removeIngredient(t)},children:"Remove"})]},t)}))]}),Object(g.jsxs)(F.a.Group,{children:[Object(g.jsx)(F.a.Label,{className:"form-label",children:"Steps"}),Object(g.jsx)("br",{}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",onClick:this.addStep,children:"Add Step"}),this.state.steps.map((function(e,t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(F.a.Control,{type:"text",placeholder:"Step",className:"input-form",required:!0,id:t.toString(),name:"steps",value:e,onChange:n.handleChange}),Object(g.jsx)(L.a,{className:"form-btn",variant:"danger",onClick:function(){return n.removeStep(t)},children:"Remove"})]},t)})),Object(g.jsx)("br",{})]}),Object(g.jsx)(L.a,{className:"form-btn",variant:"success",type:"submit",onClick:this.createRecipe,children:"Submit"})]}),Object(g.jsx)("ul",{className:"recipe-list",children:this.state.recipes.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:1})).map((function(e){return Object(g.jsxs)("li",{className:"recipe-list",style:a,children:[Object(g.jsx)(J.a,{children:Object(g.jsx)(L.a,{variant:"dark",onClick:function(){return n.setState({selectedRecipe:!0,selectedRecipeId:e._id,recipeToShow:e,recipeToShowName:e.name,ingredientsToShow:e.ingredients,stepsToShow:e.steps})},children:e.name})}),Object(g.jsxs)(J.a,{children:["Steps:",e.steps.length]}),Object(g.jsx)(J.a,{children:Object(g.jsxs)("p",{children:["Ingredients:",e.ingredients.length]})}),Object(g.jsx)(J.a,{children:Object(g.jsx)(L.a,{variant:"danger",onClick:n.deleteRecipe,id:e._id,children:"Delete"})})]},e._id)}))})]})})}}]),n}(a.Component),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).setUser=function(e){return a.setState({user:e})},a.clearUser=function(){return a.setState({user:null})},a.deleteAlert=function(e){a.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},a.msgAlert=function(e){var t=e.heading,n=e.message,s=e.variant,r=Object(p.a)();a.setState((function(e){return{msgAlerts:[].concat(Object(c.a)(e.msgAlerts),[{heading:t,message:n,variant:s,id:r}])}}))},a.state={user:null,msgAlerts:[]},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,s=t.user;return Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(k,{user:s}),n.map((function(t){return Object(g.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(E,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(g.jsx)(z,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(g.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(g.jsx)(V,{msgAlert:e.msgAlert,user:s})}}),Object(g.jsx)(O,{user:s,path:"/recipes",render:function(){return Object(g.jsx)(Q,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),n}(a.Component),K=Object(g.jsx)(S.a,{basename:"/recipe-app",children:Object(g.jsx)(Y,{})});i.a.render(K,document.getElementById("root"))},89:function(e,t,n){},98:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.be328575.chunk.js.map