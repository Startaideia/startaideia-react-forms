(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(2),o=n(6),r=(n(0),n(75)),i=n(83),l={id:"first-step",title:"First Steps",sidebar_label:"First Steps"},s={unversionedId:"first-step",id:"first-step",isDocsHomePage:!1,title:"First Steps",description:"The main component of this library is Form. It provides a context for the inputs and can handle loading, invalid states and form submission.",source:"@site/docs/first-step.md",permalink:"/startaideia-react-forms/docs/first-step",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/first-step.md",sidebar_label:"First Steps",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/startaideia-react-forms/docs/installation"},next:{title:"Inputs",permalink:"/startaideia-react-forms/docs/inputs"}},c=[],u={rightToc:c};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The main component of this library is ",Object(r.b)("strong",{parentName:"p"},"Form"),". It provides a context for the inputs and can handle loading, invalid states and form submission."),Object(r.b)("p",null,"Bellow, a simple example of a login form:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'import { Form, Input, Button } from "@startaideia/react-forms"\n\nfunction LoginPage() {\n  function handleLogin(data) {\n    console.log(data) // { email: string, passoword: string }\n  }\n  return (\n    <Form onSubmit={handleLogin}>\n      <Input.Email isRequired />\n      <Input.Password />\n      <Form.Footer>\n        <Button.Submit text="Log In" />\n      </Form.Footer>\n    </Form>\n  )\n}\n')),Object(r.b)("p",null,"The code above will print the following component:"),Object(r.b)("div",{style:{padding:"30px 0px"}},Object(r.b)(i.b,{mdxType:"Form"},Object(r.b)(i.c.Email,{isRequired:!0}),Object(r.b)(i.c.Password,null),Object(r.b)(i.b.Footer,null,Object(r.b)(i.a.Submit,{text:"Log In"})))),Object(r.b)("p",null,"This is the power of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@startaideia/react-forms"}),"@startaideia/react-forms"),". With just a fill lines of code, you have a full featured form with:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A as-you-type data validation and user validation feedback"),Object(r.b)("li",{parentName:"ul"},"A simple interface to extract form data"),Object(r.b)("li",{parentName:"ul"},"A submit button that is disabled if the form is not valid"),Object(r.b)("li",{parentName:"ul"},"A full keyboard compatibility for mobile phone users")))}m.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return oe})),n.d(t,"c",(function(){return ne}));var a=n(0),o=n.n(a),r=n(100),i=n(95),l=n.n(i),s=n(96),c=n(101),u=n.n(c),m=n(102),p=n.n(m),d=n(99),f=n.n(d),b=n(108),g=n(103),h=n.n(g),v=n(104),x=n.n(v),y=n(106),j=n(107),O={colors:{transparent:"transparent",valid:"#48BB78",invalid:"#F56565",black:"#2D3748",white:"#fff",primary:"#3f51b5"},fonts:{body:"'Roboto', sans-serif"},fontSize:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},components:{input:"\n      border-width: 0px 0px 1px 0px;\n    "}};function k(e){return function({theme:t}){return l.a.get(t,e,l.a.get(O,e,""))}}let S;const $=r.a.ul(S||(S=(e=>e)`
  position: absolute;
  width: 100%;
  height: auto;
  max-height: 100px;
  top: 40px;
  left: 0px;
  background: ${0};
  border: 1px solid #e6e6e6;
  z-index: 9;
  padding: 0;
  list-style: none;
  font-family: ${0};
  font-size: ${0};
  display: none;

  &.has-focus {
    display: block;
  }

  li {
    padding: 8px 10px;
    color: ${0};

    &:hover {
      cursor: pointer;
      background: ${0};
      color: ${0};
    }
  }

  ${0};
`),k("colors.white"),k("fonts.body"),k("fontSize.sm"),k("colors.black"),k("colors.primary"),k("colors.white"),k("components.dropdown"));let E;const C=r.a.p(E||(E=(e=>e)`
  margin: 5px 0;
  display: block;
  color: ${0};
  font-family: ${0};
  padding: 0;
  font-size: ${0};

  &.is-invalid {
    color: ${0};
  }

  &.is-valid {
    color: ${0};
  }
`),k("colors.black"),k("fonts.body"),k("fontSize.xs"),k("colors.invalid"),k("colors.valid"));let w;const N=r.a.button(w||(w=(e=>e)`
  font-family: ${0};
  border: 1px solid ${0};
  background: ${0};
  color: ${0};
  font-weight: bold;
  outline: none;
  padding: 8px 20px;
  font-size: ${0};
  margin-top: 5px;
  border-radius: 5px;
  transition: ease 0.25s;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
  }

  ${0};
`),k("fonts.body"),k("colors.primary"),k("colors.primary"),k("colors.white"),k("fontSize.sm"),k("components.button"));let P;const F=r.a.div(P||(P=(e=>e)`
  padding-top: 8px;
  position: relative;
  display: flex;
  flex-direction: column;

  .icon-container {
    position: absolute;
    right: 0;
    bottom: 2px;
    font-size: ${0};
    color: ${0};
    height: 30px;
    min-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
      border-color: ${0};
    }

    &.is-invalid {
      color: ${0};
    }

    &.is-valid {
      color: ${0};
    }

    &.has-before-icon {
      left: 0;
      right: inherit;
    }
  }
`),k("fontSize.lg"),k("colors.black"),k("colors.primary"),k("colors.invalid"),k("colors.valid"));let L;const I=r.a.input(L||(L=(e=>e)`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 0px;
  outline: none;
  padding: 0px 10px;
  font-family: ${0};
  color: ${0};
  font-size: ${0};
  transition: 0.25s;
  flex-grow: 1;

  &:focus {
    border-color: ${0};
  }

  &.is-invalid {
    color: ${0};
    border-color: ${0};
  }

  &.is-valid {
    color: ${0};
    border-color: ${0};
  }

  &.has-before-icon {
    padding-left: 30px;
  }

  ${0}
`),k("fonts.body"),k("colors.black"),k("fontSize.sm"),k("colors.primary"),k("colors.invalid"),k("colors.invalid"),k("colors.valid"),k("colors.valid"),k("components.input"));let V;const z=r.a.label(V||(V=(e=>e)`
  margin-bottom: 5px;
  display: block;
  color: ${0};
  font-family: ${0};
  font-weight: bold;
  font-size: ${0};

  &.has-focus {
    color: ${0};
  }

  &.is-invalid {
    color: ${0};
  }

  &.is-valid {
    color: ${0};
  }
`),k("colors.black"),k("fonts.body"),k("fontSize.sm"),k("colors.primary"),k("colors.invalid"),k("colors.valid"));let J;var R=r.a.form(J||(J=(e=>e)``));const T={isLoading:!1,fields:[],currentValue:{},validationRules:{},validationState:{}};var A=o.a.createContext({});function B({initialValue:e={},children:t}){const[n,r]=Object(a.useState)({initialValue:e,...T});return o.a.createElement(A.Provider,{value:{isValid:function(){for(const e in n.validationState)if(!n.validationState[e])return!1;return!0},state:n,setState:r}},t)}var _={Submit:function({text:e,...t}){const{isValid:n,state:{isLoading:r}}=Object(a.useContext)(A);return o.a.createElement(N,Object.assign({disabled:!n()||r,type:"submit"},t),e)}};function q({value:e}){const t=u()(String(e)).replace(/[^\d\p{L}]/g,"");return 0===t.length||function(e){if(""===e)return!1;if(14!==e.length)return!1;if("00000000000000"===e||"11111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;let t=e.length-2,n=e.substring(0,t);const a=e.substring(t);let o=0,r=t-7;for(let l=t;l>=1;l--)o+=n.charAt(t-l)*r--,r<2&&(r=9);let i=o%11<2?0:11-o%11;if(i!==a.charAt(0))return!1;t+=1,n=e.substring(0,t),o=0,r=t-7;for(let l=t;l>=1;l--)o+=n.charAt(t-l)*r--,r<2&&(r=9);return i=o%11<2?0:11-o%11,i===a.charAt(1)}(t)?null:"N\xe3o \xe9 um CNPJ v\xe1lido"}function D({value:e}){const t=u()(String(e)).replace(/[^\d\p{L}]/g,"");return 0===t.length||function(e){if(!e||11!==e.length||"00000000000"===e||"11111111111"===e||"22222222222"===e||"33333333333"===e||"44444444444"===e||"55555555555"===e||"66666666666"===e||"77777777777"===e||"88888888888"===e||"99999999999"===e)return!1;let t,n=0;for(var a=1;a<=9;a++)n+=parseInt(e.substring(a-1,a))*(11-a);if(t=10*n%11,10!==t&&11!==t||(t=0),t!==parseInt(e.substring(9,10)))return!1;for(n=0,a=1;a<=10;a++)n+=parseInt(e.substring(a-1,a))*(12-a);return t=10*n%11,10!==t&&11!==t||(t=0),t===parseInt(e.substring(10,11))}(t)?null:"N\xe3o \xe9 um CPF v\xe1lido"}function M({mask:e=!1,country:t,mobile:n}){return[[10,14],[11,15],[12,18],[13,19]][(t?[2,3]:[0,1])[n?1:0]][e?1:0]}function X({country:e,mobile:t,phone:n}){return function(a){const o=e?"+## (##)":"(##)",r=M({country:e,mobile:t,phone:n});return t&&n?a.length<r?f.a.apply(a,o+" ####-####"):f.a.apply(a,o+" #####-####"):t?f.a.apply(a,o+" #####-####"):n?f.a.apply(a,o+" ####-####"):a}}var H={__proto__:null,isRequired:function({value:e}){return e?0===String(e).replace(/\s/g,"").length?"Campo obrigat\xf3rio":null:"Campo obrigat\xf3rio"},isCPFCNPJ:function({value:e}){const t=u()(String(e)).replace(/[^\d\p{L}]/g,"");return 0===t.length?null:t.length<=11?D({value:t}):q({value:t})},isLength:function({value:e,params:t}){const n=u()(String(e)),{exact:a}=t;if(0===n.length)return null;if(a&&n.length===a)return null;if(a&&n.length!==a)return`O campo precisa ter ${a} caracteres`;if(!p()(n,t)){const{min:e,max:n}=t;return e&&n?`O campo precisa ter entre ${e} e ${n} caracteres`:e?`O campo precisa ter no m\xednimo ${e} caracteres`:`O campo precisa ter no m\xe1ximo ${n} caracteres`}return null},isPhone:function({value:e,params:t}){const n=u()(String(e));if(0===n.length)return null;if(n.length<M(t))return"Telefone muito curto";const a=Object(b.a)(n,"BR");return(null==a?void 0:a.isValid())?null:"N\xe3o \xe9 um telefone v\xe1lido"},isEqual:function({value:e,params:t}){return h()(e,t)?null:"O valor deste campo est\xe1 incorreto"},isEmail:function({value:e}){const t=e.replace(/\s/g,"");return 0===t.length||x()(t)?null:"N\xe3o \xe9 um e-mail v\xe1lido"},isCNPJ:q,isCPF:D};function U({beforeIcon:e,afterIcon:t,errors:n,touched:a,focus:o}){const r=[];return o&&r.push("has-focus"),a&&n&&r.push("is-invalid"),a&&!n&&r.push("is-valid"),e&&(r.push("has-icon"),r.push("has-before-icon")),t&&(r.push("has-icon"),r.push("has-after-icon")),r.join(" ")}function W(e,t={}){const{state:n,setState:o}=Object(a.useContext)(A),r={...n};function i(){const t=l.a.get(r,"initialValue."+e,"");return l.a.get(r,"currentValue."+e,t)}function s(){const n=function(e,t,n){const a=[];for(const o in n){if(!n[o])continue;const r=H[o]({name:e,value:t,params:n[o]});r&&a.push(r)}return a.length>0?a:null}(e,i(),t);return o(t=>({...t,validationState:{...t.validationState,[e]:!n}})),n}return Object(a.useEffect)(()=>{o(n=>{const a=[...n.fields,e];return{...l.a.set(n,"currentValue."+e,i()),...l.a.set(n,"validationRules."+e,t),fields:a}}),s()},[e,t]),{onChange:function(t){o({...l.a.set(r,"currentValue."+e,t)})},getValue:i,getRules:function(){return l.a.get(r,"validationRules."+e,{})},validate:s,value:i()}}function G({name:e,label:t,mask:n,beforeIcon:r,afterIcon:i,...c}){const[u]=Object(a.useState)(l.a.pick(c,l.a.keys(H))),[m]=Object(a.useState)(l.a.pick(c,["xs","sm","md","lg","xl","xxl"])),{onChange:p,getValue:d,validate:b}=W(e,u),[g,h]=Object(a.useState)(null),[v,x]=Object(a.useState)(!1),[y,j]=Object(a.useState)(!1),O=l.a.omit(c,l.a.keys(H)),k=U({beforeIcon:r,afterIcon:i,errors:g,touched:y,focus:v});return o.a.createElement(s.Col,Object.assign({xs:12},m),o.a.createElement(F,{className:k},t&&o.a.createElement(z,{className:k},t),(r||i)&&o.a.createElement("div",{className:"icon-container "+k},r||i),o.a.createElement(I,Object.assign({name:e,onChange:function(e){let t=e.target.value;if(n){const e=t.replace(/[^\d\p{L}]/g,"");t="string"==typeof n?f.a.apply(e,n):n(e)}p(t),h(b())},onBlur:function(){j(!0),x(!1),y||h(b())},onFocus:()=>x(!0),value:d(),className:k},O))),y&&(null==g?void 0:g.map((e,t)=>o.a.createElement(C,{className:k,key:t},e))))}let K,Q,Y=e=>e;const Z=r.a.div(K||(K=Y`
  font-family: ${0};
  display: flex;
  color: ${0};

  &:hover {
    cursor: pointer;
  }
`),k("fonts.body"),k("colors.black")),ee=r.a.div(Q||(Q=Y`
  height: 15px;
  width: 15px;
  border: 2px solid ${0};
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${0};
  transition: linear 0.25s;
  margin-right: 10px;

  &:hover {
    border-color: ${0};
  }

  &.checked {
    background: ${0};
    color: ${0};
    border-color: ${0};
  }
`),k("colors.black"),k("colors.transparent"),k("colors.primary"),k("colors.primary"),k("colors.white"),k("colors.primary"));function te(e){let t="##.###.###/####-##";return e.length<=11&&(t="###.###.###-##"),f.a.apply(e,t)}var ne={Checkbox:function({name:e,label:t,value:n="on",text:r,...i}){const[c]=Object(a.useState)(l.a.pick(i,["xs","sm","md","lg","xl","xxl"])),[u]=Object(a.useState)(l.a.pick(i,l.a.keys(H))),[m,p]=Object(a.useState)(null),[d,f]=Object(a.useState)(!1),{onChange:b,getValue:g,validate:h}=W(e,u),v=U({errors:m,touched:d});function x(){return g()===n}return o.a.createElement(s.Col,Object.assign({xs:12},c),o.a.createElement(F,null,t&&o.a.createElement(z,null,t),o.a.createElement(Z,{onClick:function(){b(x()?null:n),p(h()),f(!0)}},o.a.createElement(ee,{className:x()?"checked":""},o.a.createElement(y.a,null)),r)),d&&(null==m?void 0:m.map((e,t)=>o.a.createElement(C,{className:v,key:t},e))))},Password:function({...e}){return o.a.createElement(G,Object.assign({isRequired:!0,isLength:{min:6,max:16},name:"password",type:"password",label:"Senha",maxLength:16},e))},CPFCNPJ:function({...e}){return o.a.createElement(G,Object.assign({mask:te,maxLength:18,isCPFCNPJ:!0,name:"cpf_cnpj",type:"text",label:"CPF ou CNPJ",inputmode:"numeric"},e))},Select:function({name:e,label:t,source:n,...r}){const[i]=Object(a.useState)(l.a.pick(r,["xs","sm","md","lg","xl","xxl"])),[c]=Object(a.useState)(l.a.pick(r,l.a.keys(H))),[u,m]=Object(a.useState)(null),[p,d]=Object(a.useState)(null),[f,b]=Object(a.useState)(n),[g,h]=Object(a.useState)(""),[v,x]=Object(a.useState)(!1),[y,O]=Object(a.useState)(!1),k=U({focus:y,touched:v,errors:u}),{onChange:S,validate:E,value:w}=W(e,c);function N(e,t){return function(){e.value!==(null==p?void 0:p.value)&&(d(e),S(e.value),m(E()),x(t))}}return Object(a.useEffect)(()=>{if(!l.a.isEqual(f,n))return b(n),void d(null);b(n)},[n]),Object(a.useEffect)(()=>{if(!w)return;const e=f.find(e=>e.value===w);(null==e?void 0:e.value)!==(null==p?void 0:p.value)&&N(e,!1)()},[w]),o.a.createElement(s.Col,Object.assign({xs:12},i),o.a.createElement(F,{className:k},t&&o.a.createElement(z,{className:k},t),o.a.createElement(I,{value:y?g:(null==p?void 0:p.label)||"",onChange:function(e){h(e.target.value)},onBlur:function(){O(!1)},onFocus:function(){O(!0)},className:k}),p&&o.a.createElement("div",{className:"icon-container has-after-icon"},o.a.createElement(j.a,{onClick:function(){d(null),S(null),m(E()),x(!0)}})),o.a.createElement($,{className:k},f.filter(e=>{return t=g,-1!==e.label.toLowerCase().indexOf(t.toLowerCase());var t}).map(e=>o.a.createElement("li",{key:e.value,onMouseDown:N(e,!0)},e.label)))),null==u?void 0:u.map((e,t)=>o.a.createElement(C,{className:k,key:t},e)))},Email:function({...e}){return o.a.createElement(G,Object.assign({isEmail:!0,name:"email",type:"email",label:"E-mail"},e))},Phone:function({country:e=!1,phone:t=!0,mobile:n=!0,...a}){return o.a.createElement(G,Object.assign({mask:X({country:e,mobile:n,phone:t}),name:"phone",type:"tel",label:"Telefone",inputmode:"numeric",maxLength:M({country:e,mobile:n,mask:!0}),isPhone:{country:e,mobile:!t&&n,phone:t,mask:!0}},a))},Text:G,CNPJ:function({...e}){return o.a.createElement(G,Object.assign({mask:"##.###.###/####-##",maxLength:18,isCNPJ:!0,name:"cnpj",type:"text",label:"CNPJ",inputmode:"numeric"},e))},CPF:function({...e}){return o.a.createElement(G,Object.assign({mask:"###.###.###-##",maxLength:14,isCPF:!0,name:"cpf",type:"text",label:"CPF",inputmode:"numeric"},e))},CEP:function({...e}){return o.a.createElement(G,Object.assign({mask:"#####-###",name:"cep",label:"CEP",inputmode:"numeric",isLength:{exact:9},maxLength:9},e))}};function ae({onSubmit:e,children:t}){const{state:n,setState:r}=Object(a.useContext)(A);return o.a.createElement(R,{onSubmit:async function(t){t.preventDefault(),r({...n,isLoading:!0}),e&&(await e({...n.currentValue}),r({...n,isLoading:!1}))}},o.a.createElement(s.Container,null,o.a.createElement(s.Row,null,t)))}function oe({initialValue:e,children:t,...n}){return o.a.createElement(B,{initialValue:e},o.a.createElement(ae,Object.assign({},n),t))}oe.Footer=function({xs:e=12,children:t}){return o.a.createElement(s.Col,{xs:e},t)}}}]);