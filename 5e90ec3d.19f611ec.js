(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),l=a(6),r=(a(0),a(75)),c=a(83),b={id:"inputs",title:"Inputs",sidebar_label:"Inputs"},i={unversionedId:"inputs",id:"inputs",isDocsHomePage:!1,title:"Inputs",description:"Text",source:"@site/docs/inputs.md",permalink:"/startaideia-react-forms/docs/inputs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/inputs.md",sidebar_label:"Inputs",sidebar:"someSidebar",previous:{title:"First Steps",permalink:"/startaideia-react-forms/docs/first-step"},next:{title:"Rules",permalink:"/startaideia-react-forms/docs/rules"}},o=[{value:"Text",id:"text",children:[]},{value:"Email",id:"email",children:[]},{value:"Password",id:"password",children:[]},{value:"CPF",id:"cpf",children:[]},{value:"CNPJ",id:"cnpj",children:[]},{value:"CPF or CNPJ",id:"cpf-or-cnpj",children:[]},{value:"CEP",id:"cep",children:[]},{value:"Phone",id:"phone",children:[]},{value:"Checkbox",id:"checkbox",children:[]},{value:"Select",id:"select",children:[]}],u={rightToc:o};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"text"},"Text"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Text name="name" label="Whats your name?" placeholder="Joe Doe" />\n')),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.Text,{name:"name",label:"Whats your name?",placeholder:"Joe Doe"})),Object(r.b)("h2",{id:"email"},"Email"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.Email />\n")),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.Email,null)),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"email")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"E-mail")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"email")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isEmail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input is a valid email"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"password"},"Password"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.Password />\n")),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.Password,null)),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"password")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Senha")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"password")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isLength"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input length"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"min: 6, max: 16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isRequired"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input is filled"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"cpf"},"CPF"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CPF />\n")),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.CPF,null)),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cpf")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CPF")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isCPF"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input is valid CPF"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"cnpj"},"CNPJ"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CNPJ />\n")),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.CNPJ,null)),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cnpj")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CNPJ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isCNPJ"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input is valid CNPJ"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"cpf-or-cnpj"},"CPF or CNPJ"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CPFCNPJ />\n")),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.CPFCNPJ,null)),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cpf_cnpj")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CPF or CNPJ")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isCPFCNPJ"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input is valid CPF or CNPJ"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"cep"},"CEP"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Input.CEP />\n")),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.CEP,null)),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cep")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CEP")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isLength"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validates that the input length"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"min: 9")))),Object(r.b)("h2",{id:"phone"},"Phone"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Phone\n  label="Telefone Fixo + Pa\xeds"\n  name="phone_country"\n  country\n  mobile={false}\n/>\n<Input.Phone label="Celular" name="mobile" phone={false} />\n<Input.Phone\n  label="Celular + Pa\xeds"\n  name="mobile_country"\n  country\n  phone={false}\n/>\n<Input.Phone label="Celular ou Telefone" name="phone_complete" />\n<Input.Phone\n  label="Celular ou Telefone + Pa\xecs"\n  name="phone_complete_contry"\n  country\n/>\n')),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.Phone,{label:"Telefone Fixo + Pa\xeds",name:"phone_country",country:!0,mobile:!1}),Object(r.b)(c.c.Phone,{label:"Celular",name:"mobile",phone:!1}),Object(r.b)(c.c.Phone,{label:"Celular + Pa\xeds",name:"mobile_country",country:!0,phone:!1}),Object(r.b)(c.c.Phone,{label:"Celular ou Telefone",name:"phone_complete"}),Object(r.b)(c.c.Phone,{label:"Celular ou Telefone + Pa\xecs",name:"phone_complete_contry",country:!0})),Object(r.b)("p",null,"Default input props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Prop"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"phone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input label"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Telefone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"phone")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"country"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if must add country code"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"phone"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if is a house phone"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mobile"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if is a mobile phone"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("h2",{id:"checkbox"},"Checkbox"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Checkbox name="remember_me" text="Remember me" />\n')),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.Checkbox,{name:"remember_me",text:"Remember me"})),Object(r.b)("h2",{id:"select"},"Select"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const dataSet = [\n  {\n    value: "M",\n    label: "Masculino",\n  },\n  {\n    value: "F",\n    label: "Feminino",\n  },\n]\n\n<Input.Select label="Sexo" name="gender" source={dataSet} />\n')),Object(r.b)(c.b,{mdxType:"Form"},Object(r.b)(c.c.Select,{label:"Sexo",name:"gender",source:[{value:"M",label:"Masculino"},{value:"F",label:"Feminino"}]})))}p.isMDXComponent=!0},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return M})),a.d(t,"b",(function(){return le})),a.d(t,"c",(function(){return ae}));var n=a(0),l=a.n(n),r=a(100),c=a(95),b=a.n(c),i=a(96),o=a(101),u=a.n(o),p=a(102),s=a.n(p),m=a(99),d=a.n(m),j=a(108),O=a(103),g=a.n(O),h=a(104),N=a.n(h),f=a(106),y=a(107),x={colors:{transparent:"transparent",valid:"#48BB78",invalid:"#F56565",black:"#2D3748",white:"#fff",primary:"#3f51b5"},fonts:{body:"'Roboto', sans-serif"},fontSize:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},components:{input:"\n      border-width: 0px 0px 1px 0px;\n    "}};function v(e){return function({theme:t}){return b.a.get(t,e,b.a.get(x,e,""))}}let C;const P=r.a.ul(C||(C=(e=>e)`
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
`),v("colors.white"),v("fonts.body"),v("fontSize.sm"),v("colors.black"),v("colors.primary"),v("colors.white"),v("components.dropdown"));let E;const k=r.a.p(E||(E=(e=>e)`
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
`),v("colors.black"),v("fonts.body"),v("fontSize.xs"),v("colors.invalid"),v("colors.valid"));let S;const $=r.a.button(S||(S=(e=>e)`
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
`),v("fonts.body"),v("colors.primary"),v("colors.primary"),v("colors.white"),v("fontSize.sm"),v("components.button"));let F;const w=r.a.div(F||(F=(e=>e)`
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
`),v("fontSize.lg"),v("colors.black"),v("colors.primary"),v("colors.invalid"),v("colors.valid"));let I;const T=r.a.input(I||(I=(e=>e)`
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
`),v("fonts.body"),v("colors.black"),v("fontSize.sm"),v("colors.primary"),v("colors.invalid"),v("colors.invalid"),v("colors.valid"),v("colors.valid"),v("components.input"));let J;const V=r.a.label(J||(J=(e=>e)`
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
`),v("colors.black"),v("fonts.body"),v("fontSize.sm"),v("colors.primary"),v("colors.invalid"),v("colors.valid"));let D;var L=r.a.form(D||(D=(e=>e)``));const _={isLoading:!1,fields:[],currentValue:{},validationRules:{},validationState:{}};var z=l.a.createContext({});function R({initialValue:e={},children:t}){const[a,r]=Object(n.useState)({initialValue:e,..._});return l.a.createElement(z.Provider,{value:{isValid:function(){for(const e in a.validationState)if(!a.validationState[e])return!1;return!0},state:a,setState:r}},t)}var M={Submit:function({text:e,...t}){const{isValid:a,state:{isLoading:r}}=Object(n.useContext)(z);return l.a.createElement($,Object.assign({disabled:!a()||r,type:"submit"},t),e)}};function q({value:e}){const t=u()(String(e)).replace(/[^\d\p{L}]/g,"");return 0===t.length||function(e){if(""===e)return!1;if(14!==e.length)return!1;if("00000000000000"===e||"11111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;let t=e.length-2,a=e.substring(0,t);const n=e.substring(t);let l=0,r=t-7;for(let b=t;b>=1;b--)l+=a.charAt(t-b)*r--,r<2&&(r=9);let c=l%11<2?0:11-l%11;if(c!==n.charAt(0))return!1;t+=1,a=e.substring(0,t),l=0,r=t-7;for(let b=t;b>=1;b--)l+=a.charAt(t-b)*r--,r<2&&(r=9);return c=l%11<2?0:11-l%11,c===n.charAt(1)}(t)?null:"N\xe3o \xe9 um CNPJ v\xe1lido"}function B({value:e}){const t=u()(String(e)).replace(/[^\d\p{L}]/g,"");return 0===t.length||function(e){if(!e||11!==e.length||"00000000000"===e||"11111111111"===e||"22222222222"===e||"33333333333"===e||"44444444444"===e||"55555555555"===e||"66666666666"===e||"77777777777"===e||"88888888888"===e||"99999999999"===e)return!1;let t,a=0;for(var n=1;n<=9;n++)a+=parseInt(e.substring(n-1,n))*(11-n);if(t=10*a%11,10!==t&&11!==t||(t=0),t!==parseInt(e.substring(9,10)))return!1;for(a=0,n=1;n<=10;n++)a+=parseInt(e.substring(n-1,n))*(12-n);return t=10*a%11,10!==t&&11!==t||(t=0),t===parseInt(e.substring(10,11))}(t)?null:"N\xe3o \xe9 um CPF v\xe1lido"}function A({mask:e=!1,country:t,mobile:a}){return[[10,14],[11,15],[12,18],[13,19]][(t?[2,3]:[0,1])[a?1:0]][e?1:0]}function W({country:e,mobile:t,phone:a}){return function(n){const l=e?"+## (##)":"(##)",r=A({country:e,mobile:t,phone:a});return t&&a?n.length<r?d.a.apply(n,l+" ####-####"):d.a.apply(n,l+" #####-####"):t?d.a.apply(n,l+" #####-####"):a?d.a.apply(n,l+" ####-####"):n}}var X={__proto__:null,isRequired:function({value:e}){return e?0===String(e).replace(/\s/g,"").length?"Campo obrigat\xf3rio":null:"Campo obrigat\xf3rio"},isCPFCNPJ:function({value:e}){const t=u()(String(e)).replace(/[^\d\p{L}]/g,"");return 0===t.length?null:t.length<=11?B({value:t}):q({value:t})},isLength:function({value:e,params:t}){const a=u()(String(e)),{exact:n}=t;if(0===a.length)return null;if(n&&a.length===n)return null;if(n&&a.length!==n)return`O campo precisa ter ${n} caracteres`;if(!s()(a,t)){const{min:e,max:a}=t;return e&&a?`O campo precisa ter entre ${e} e ${a} caracteres`:e?`O campo precisa ter no m\xednimo ${e} caracteres`:`O campo precisa ter no m\xe1ximo ${a} caracteres`}return null},isPhone:function({value:e,params:t}){const a=u()(String(e));if(0===a.length)return null;if(a.length<A(t))return"Telefone muito curto";const n=Object(j.a)(a,"BR");return(null==n?void 0:n.isValid())?null:"N\xe3o \xe9 um telefone v\xe1lido"},isEqual:function({value:e,params:t}){return g()(e,t)?null:"O valor deste campo est\xe1 incorreto"},isEmail:function({value:e}){const t=e.replace(/\s/g,"");return 0===t.length||N()(t)?null:"N\xe3o \xe9 um e-mail v\xe1lido"},isCNPJ:q,isCPF:B};function H({beforeIcon:e,afterIcon:t,errors:a,touched:n,focus:l}){const r=[];return l&&r.push("has-focus"),n&&a&&r.push("is-invalid"),n&&!a&&r.push("is-valid"),e&&(r.push("has-icon"),r.push("has-before-icon")),t&&(r.push("has-icon"),r.push("has-after-icon")),r.join(" ")}function U(e,t={}){const{state:a,setState:l}=Object(n.useContext)(z),r={...a};function c(){const t=b.a.get(r,"initialValue."+e,"");return b.a.get(r,"currentValue."+e,t)}function i(){const a=function(e,t,a){const n=[];for(const l in a){if(!a[l])continue;const r=X[l]({name:e,value:t,params:a[l]});r&&n.push(r)}return n.length>0?n:null}(e,c(),t);return l(t=>({...t,validationState:{...t.validationState,[e]:!a}})),a}return Object(n.useEffect)(()=>{l(a=>{const n=[...a.fields,e];return{...b.a.set(a,"currentValue."+e,c()),...b.a.set(a,"validationRules."+e,t),fields:n}}),i()},[e,t]),{onChange:function(t){l({...b.a.set(r,"currentValue."+e,t)})},getValue:c,getRules:function(){return b.a.get(r,"validationRules."+e,{})},validate:i,value:c()}}function G({name:e,label:t,mask:a,beforeIcon:r,afterIcon:c,...o}){const[u]=Object(n.useState)(b.a.pick(o,b.a.keys(X))),[p]=Object(n.useState)(b.a.pick(o,["xs","sm","md","lg","xl","xxl"])),{onChange:s,getValue:m,validate:j}=U(e,u),[O,g]=Object(n.useState)(null),[h,N]=Object(n.useState)(!1),[f,y]=Object(n.useState)(!1),x=b.a.omit(o,b.a.keys(X)),v=H({beforeIcon:r,afterIcon:c,errors:O,touched:f,focus:h});return l.a.createElement(i.Col,Object.assign({xs:12},p),l.a.createElement(w,{className:v},t&&l.a.createElement(V,{className:v},t),(r||c)&&l.a.createElement("div",{className:"icon-container "+v},r||c),l.a.createElement(T,Object.assign({name:e,onChange:function(e){let t=e.target.value;if(a){const e=t.replace(/[^\d\p{L}]/g,"");t="string"==typeof a?d.a.apply(e,a):a(e)}s(t),g(j())},onBlur:function(){y(!0),N(!1),f||g(j())},onFocus:()=>N(!0),value:m(),className:v},x))),f&&(null==O?void 0:O.map((e,t)=>l.a.createElement(k,{className:v,key:t},e))))}let K,Q,Y=e=>e;const Z=r.a.div(K||(K=Y`
  font-family: ${0};
  display: flex;
  color: ${0};

  &:hover {
    cursor: pointer;
  }
`),v("fonts.body"),v("colors.black")),ee=r.a.div(Q||(Q=Y`
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
`),v("colors.black"),v("colors.transparent"),v("colors.primary"),v("colors.primary"),v("colors.white"),v("colors.primary"));function te(e){let t="##.###.###/####-##";return e.length<=11&&(t="###.###.###-##"),d.a.apply(e,t)}var ae={Checkbox:function({name:e,label:t,value:a="on",text:r,...c}){const[o]=Object(n.useState)(b.a.pick(c,["xs","sm","md","lg","xl","xxl"])),[u]=Object(n.useState)(b.a.pick(c,b.a.keys(X))),[p,s]=Object(n.useState)(null),[m,d]=Object(n.useState)(!1),{onChange:j,getValue:O,validate:g}=U(e,u),h=H({errors:p,touched:m});function N(){return O()===a}return l.a.createElement(i.Col,Object.assign({xs:12},o),l.a.createElement(w,null,t&&l.a.createElement(V,null,t),l.a.createElement(Z,{onClick:function(){j(N()?null:a),s(g()),d(!0)}},l.a.createElement(ee,{className:N()?"checked":""},l.a.createElement(f.a,null)),r)),m&&(null==p?void 0:p.map((e,t)=>l.a.createElement(k,{className:h,key:t},e))))},Password:function({...e}){return l.a.createElement(G,Object.assign({isRequired:!0,isLength:{min:6,max:16},name:"password",type:"password",label:"Senha",maxLength:16},e))},CPFCNPJ:function({...e}){return l.a.createElement(G,Object.assign({mask:te,maxLength:18,isCPFCNPJ:!0,name:"cpf_cnpj",type:"text",label:"CPF ou CNPJ",inputmode:"numeric"},e))},Select:function({name:e,label:t,source:a,...r}){const[c]=Object(n.useState)(b.a.pick(r,["xs","sm","md","lg","xl","xxl"])),[o]=Object(n.useState)(b.a.pick(r,b.a.keys(X))),[u,p]=Object(n.useState)(null),[s,m]=Object(n.useState)(null),[d,j]=Object(n.useState)(a),[O,g]=Object(n.useState)(""),[h,N]=Object(n.useState)(!1),[f,x]=Object(n.useState)(!1),v=H({focus:f,touched:h,errors:u}),{onChange:C,validate:E,value:S}=U(e,o);function $(e,t){return function(){e.value!==(null==s?void 0:s.value)&&(m(e),C(e.value),p(E()),N(t))}}return Object(n.useEffect)(()=>{if(!b.a.isEqual(d,a))return j(a),void m(null);j(a)},[a]),Object(n.useEffect)(()=>{if(!S)return;const e=d.find(e=>e.value===S);(null==e?void 0:e.value)!==(null==s?void 0:s.value)&&$(e,!1)()},[S]),l.a.createElement(i.Col,Object.assign({xs:12},c),l.a.createElement(w,{className:v},t&&l.a.createElement(V,{className:v},t),l.a.createElement(T,{value:f?O:(null==s?void 0:s.label)||"",onChange:function(e){g(e.target.value)},onBlur:function(){x(!1)},onFocus:function(){x(!0)},className:v}),s&&l.a.createElement("div",{className:"icon-container has-after-icon"},l.a.createElement(y.a,{onClick:function(){m(null),C(null),p(E()),N(!0)}})),l.a.createElement(P,{className:v},d.filter(e=>{return t=O,-1!==e.label.toLowerCase().indexOf(t.toLowerCase());var t}).map(e=>l.a.createElement("li",{key:e.value,onMouseDown:$(e,!0)},e.label)))),null==u?void 0:u.map((e,t)=>l.a.createElement(k,{className:v,key:t},e)))},Email:function({...e}){return l.a.createElement(G,Object.assign({isEmail:!0,name:"email",type:"email",label:"E-mail"},e))},Phone:function({country:e=!1,phone:t=!0,mobile:a=!0,...n}){return l.a.createElement(G,Object.assign({mask:W({country:e,mobile:a,phone:t}),name:"phone",type:"tel",label:"Telefone",inputmode:"numeric",maxLength:A({country:e,mobile:a,mask:!0}),isPhone:{country:e,mobile:!t&&a,phone:t,mask:!0}},n))},Text:G,CNPJ:function({...e}){return l.a.createElement(G,Object.assign({mask:"##.###.###/####-##",maxLength:18,isCNPJ:!0,name:"cnpj",type:"text",label:"CNPJ",inputmode:"numeric"},e))},CPF:function({...e}){return l.a.createElement(G,Object.assign({mask:"###.###.###-##",maxLength:14,isCPF:!0,name:"cpf",type:"text",label:"CPF",inputmode:"numeric"},e))},CEP:function({...e}){return l.a.createElement(G,Object.assign({mask:"#####-###",name:"cep",label:"CEP",inputmode:"numeric",isLength:{exact:9},maxLength:9},e))}};function ne({onSubmit:e,children:t}){const{state:a,setState:r}=Object(n.useContext)(z);return l.a.createElement(L,{onSubmit:async function(t){t.preventDefault(),r({...a,isLoading:!0}),e&&(await e({...a.currentValue}),r({...a,isLoading:!1}))}},l.a.createElement(i.Container,null,l.a.createElement(i.Row,null,t)))}function le({initialValue:e,children:t,...a}){return l.a.createElement(R,{initialValue:e},l.a.createElement(ne,Object.assign({},a),t))}le.Footer=function({xs:e=12,children:t}){return l.a.createElement(i.Col,{xs:e},t)}}}]);