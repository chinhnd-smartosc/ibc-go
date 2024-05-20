"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7283],{65487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(85893),a=n(11151);const r={title:"Wire up ICS-29 Fees to the React App",sidebar_label:"Wire up ICS-29 Fees to the React App",sidebar_position:6,slug:"/fee/fee-react"},o="Wire up ICS-29 Fee to the React app",i={id:"fee/wire-fee-react",title:"Wire up ICS-29 Fees to the React App",description:"Our goal is to create a React component that will allow users to select their ICS-29 fee amount and pay it. The final component will look like this:",source:"@site/tutorials/01-fee/06-wire-fee-react.md",sourceDirName:"01-fee",slug:"/fee/fee-react",permalink:"/tutorials/fee/fee-react",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Wire up ICS-29 Fees to the React App",sidebar_label:"Wire up ICS-29 Fees to the React App",sidebar_position:6,slug:"/fee/fee-react"},sidebar:"defaultSidebar",previous:{title:"Scaffold a React App",permalink:"/tutorials/fee/scaffold-react"},next:{title:"Testing the React App",permalink:"/tutorials/fee/test-react"}},c={},d=[{value:"1. Create the State for ICS-29 Fee",id:"1-create-the-state-for-ics-29-fee",level:2},{value:"2. Add the ICS-29 Fee UI",id:"2-add-the-ics-29-fee-ui",level:2},{value:"3. Add the ICS-29 Fee to the transaction",id:"3-add-the-ics-29-fee-to-the-transaction",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"wire-up-ics-29-fee-to-the-react-app",children:"Wire up ICS-29 Fee to the React app"}),"\n",(0,s.jsx)(t.p,{children:"Our goal is to create a React component that will allow users to select their ICS-29 fee amount and pay it. The final component will look like this:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"ICS-29 Fee UI",src:n(55690).Z+"",width:"3840",height:"1950"})}),"\n",(0,s.jsx)(t.h2,{id:"1-create-the-state-for-ics-29-fee",children:"1. Create the State for ICS-29 Fee"}),"\n",(0,s.jsxs)(t.p,{children:["We will do all our modifications in the ",(0,s.jsx)(t.code,{children:"src/components/IgntSend.tsx"})," file. First, we need to create a state for the fee amount. Add the following line to the ",(0,s.jsx)(t.code,{children:"IgntSend"})," component:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/IgntSend.tsx"',children:"interface TxData {\n  receiver: string;\n  ch: string;\n  amounts: Array<Amount>;\n  memo: string;\n  fees: Array<Amount>;\n  // plus-diff-line\n+ relayerFee: Array<Amount>;\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/IgntSend.tsx"',children:'const initialState: State = {\n  tx: {\n    receiver: "",\n    ch: "",\n    amounts: [],\n    memo: "",\n    fees: [],\n\t// plus-diff-line\n+   relayerFee: [],\n  },\n  currentUIState: UI_STATE.SEND,\n  advancedOpen: false,\n};\n'})}),"\n",(0,s.jsx)(t.h2,{id:"2-add-the-ics-29-fee-ui",children:"2. Add the ICS-29 Fee UI"}),"\n",(0,s.jsxs)(t.p,{children:["Next, we need to add a functional UI which updates the fee amount in the state. Add the following code to the ",(0,s.jsx)(t.code,{children:"IgntSend"})," component:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/IgntSend.tsx"',children:"  const handleTxFeesUpdate = (selected: Amount[]) => {\n    setState((oldState) => {\n      const tx = oldState.tx;\n      tx.fees = selected;\n      return { ...oldState, tx };\n    });\n  };\n  // plus-diff-start\n+ const handleTxRelayerFeesUpdate = (selected: Amount[]) => {\n+   setState((oldState) => {\n+     const tx = oldState.tx;\n+     tx.relayerFee = selected;\n+     return { ...oldState, tx };\n+   });\n+ };\n  // plus-diff-end\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="src/components/IgntSend.tsx"',children:'            <div className="text-xs text-gray-600">Channel</div>\n\n            <div className="input-wrapper">\n              <input\n                className="mt-1 py-2 px-4 h-12 bg-gray-100 border-xs text-base leading-tight w-full rounded-xl outline-0"\n                placeholder="Enter a channel"\n                onChange={(evt) => {\n                  setState((oldState) => {\n                    const tx = oldState.tx;\n                    tx.ch = evt.target.value;\n                    return { ...oldState, tx };\n                  });\n                }}\n              />\n            </div>\n\t\t\t// plus-diff-start\n+ \n+           <div className="text-xs pb-2 mt-8">ICS-29 Relayer Fees</div>\n+ \n+           <IgntAmountSelect\n+             className="token-selector"\n+             selected={state.tx.relayerFee}\n+             balances={balances.assets as Amount[]}\n+             update={handleTxRelayerFeesUpdate}\n+           />\n\t\t\t// plus-diff-end\n'})}),"\n",(0,s.jsxs)(t.p,{children:["At this point, you should be able to see the ICS-29 fee UI in the app. See the diff up to this point ",(0,s.jsx)(t.a,{href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/a93acb8e1b4194402a45506c5c3105b4dc03ad58",children:"here"}),". However, the fee amount is not being used in the transaction. Let's fix that."]}),"\n",(0,s.jsx)(t.h2,{id:"3-add-the-ics-29-fee-to-the-transaction",children:"3. Add the ICS-29 Fee to the transaction"}),"\n",(0,s.jsxs)(t.p,{children:["Since we will perform a ",(0,s.jsx)(t.code,{children:"MultiMsgTx"})," and follow the ",(0,s.jsx)(t.a,{href:"https://ibc.cosmos.network/v7/middleware/ics29-fee/msgs#escrowing-fees",children:"immediate incentivization flow"}),", we must import the required msg constructors from the ",(0,s.jsx)(t.code,{children:"ts-client"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/IgntSend.tsx"',children:"export default function IgntSend(props: IgntSendProps) {\n  const [state, setState] = useState(initialState);\n  const client = useClient();\n  const sendMsgSend = client.CosmosBankV1Beta1.tx.sendMsgSend;\n  const sendMsgTransfer = client.IbcApplicationsTransferV1.tx.sendMsgTransfer;\n  // plus-diff-start\n+ const msgTransfer = client.IbcApplicationsTransferV1.tx.msgTransfer;\n+ const msgPayPacketFee = client.IbcApplicationsFeeV1.tx.msgPayPacketFee;\n  // plus-diff-end\n  const { address } = useAddressContext();\n  const { balances } = useAssets(100);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Recall that the ",(0,s.jsx)(t.code,{children:"PayPacketFee"})," message allows defining different tokens and amounts for each fee type (",(0,s.jsx)(t.code,{children:"RecvFee"}),", ",(0,s.jsx)(t.code,{children:"AckFee"}),", and ",(0,s.jsx)(t.code,{children:"TimeoutFee"}),"). We will use the same amount for all three fee types."]}),"\n",(0,s.jsxs)(t.p,{children:["The amount used will be half the amount of the ",(0,s.jsx)(t.code,{children:"relayerFee"})," selected by the user. This is because one of ",(0,s.jsx)(t.code,{children:"AckFee"})," or ",(0,s.jsx)(t.code,{children:"TimeoutFee"})," will necessarily be refunded to the user since a packet either timeouts or receives acknowledgement but not both."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/IgntSend.tsx"',children:'  const sendTx = async (): Promise<void> => {\n    const fee: Array<Amount> = state.tx.fees.map((x) => ({\n      denom: x.denom,\n      amount: x.amount == "" ? "0" : x.amount,\n    }));\n\n    const amount: Array<Amount> = state.tx.amounts.map((x) => ({\n      denom: x.denom,\n      amount: x.amount == "" ? "0" : x.amount,\n    }));\n\n    // plus-diff-start\n+   const relayerFee: Array<Amount> = state.tx.relayerFee.map((x) => {\n+     const intAmount = x.amount == "" ? 0 : parseInt(x.amount, 10);\n+     const newAmount = Math.floor(intAmount / 2);\n+     return {\n+       denom: x.denom,\n+       amount: newAmount.toString(),\n+     };\n+   });\n+\n    // plus-diff-end\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now that the fee amount is defined, we can build the tx. Currently, the way that the react app works is it checks whether or not a channel has been provided. If it has, it will send a ",(0,s.jsx)(t.code,{children:"MsgTransfer"})," message (",(0,s.jsx)(t.code,{children:"isIBC = true"}),"). Otherwise, it will send a ",(0,s.jsx)(t.code,{children:"MsgSend"})," message (",(0,s.jsx)(t.code,{children:"isIBC = false"}),").\nWe will do something similar. We will check if ",(0,s.jsx)(t.code,{children:"relayerFee"})," has been provided, if it is provided, and if ",(0,s.jsx)(t.code,{children:"isIBC = true"}),", then we will build a ",(0,s.jsx)(t.code,{children:"MultiMsgTx"})," with ",(0,s.jsx)(t.code,{children:"PayPacketFee"})," and ",(0,s.jsx)(t.code,{children:"MsgTransfer"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="src/components/IgntSend.tsx"',children:'    const memo = state.tx.memo;\n\n    const isIBC = state.tx.ch !== "";\n\n\t// plus-diff-start\n+   const isFee = state.tx.relayerFee.length > 0;\n+\n    // plus-diff-end\n    let send;\n\n    let payload: any = {\n      amount,\n      toAddress: state.tx.receiver,\n      fromAddress: address,\n    };\n    setState((oldState) => ({ ...oldState, currentUIState: UI_STATE.TX_SIGNING }));\n    try {\n      if (isIBC) {\n        payload = {\n          ...payload,\n          sourcePort: "transfer",\n          sourceChannel: state.tx.ch,\n          sender: address,\n          receiver: state.tx.receiver,\n          timeoutHeight: 0,\n          timeoutTimestamp: Long.fromNumber(new Date().getTime() + 60000).multiply(1000000),\n          token: state.tx.amounts[0],\n        };\n\n\t\t// minus-diff-start\n-       send = () =>\n-         sendMsgTransfer({\n-           value: payload,\n-           fee: { amount: fee as Readonly<Amount>[], gas: "200000" },\n-           memo,\n-         });\n\t\t// minus-diff-end\n\t\t// plus-diff-start\n+       if (isFee) {\n+         const payFeeMsg = msgPayPacketFee({\n+           value: {\n+             signer: address,\n+             sourcePortId: "transfer",\n+             sourceChannelId: state.tx.ch,\n+             relayers: [],\n+             fee: {\n+               recvFee: relayerFee,\n+               ackFee: relayerFee,\n+               timeoutFee: relayerFee,\n+             },\n+           },\n+         });\n+\n+         const transferMsg = msgTransfer({\n+           value: payload,\n+         });\n+\n+         send = () =>\n+           client.signAndBroadcast(\n+             [payFeeMsg, transferMsg],\n+             { amount: fee as Readonly<Amount>[], gas: "200000" },\n+             memo,\n+           );\n+       } else {\n+         send = () =>\n+           sendMsgTransfer({\n+             value: payload,\n+             fee: { amount: fee as Readonly<Amount>[], gas: "200000" },\n+             memo,\n+           });\n+       }\n\t    // plus-diff-end\n      } else {\n'})}),"\n",(0,s.jsxs)(t.p,{children:["See the diff up to this point ",(0,s.jsx)(t.a,{href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/commit/0b3ddc8f8fe547624ec0d38f08e2344d29d22ee7",children:"here"}),". We will test the UI in the next section."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},55690:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/ignite-react-fee-f3c90910f957327b352e3ceb5507076a.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);