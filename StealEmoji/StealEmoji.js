function x(o){window.enmity.plugins.registerPlugin(o)}const d=window.enmity.modules.common.Constants,N=window.enmity.modules.common.Clipboard;window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const p=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const h=window.enmity.modules.common.Navigation,D=window.enmity.modules.common.NavigationNative,f=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const a=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function _(o){return window.enmity.patcher.create(o)}var B="StealEmoji",O="1.0.0",G="With this plugin you can easily add emojis to your servers :D",z=[{name:"SerStars",id:"861631850681729045"},{name:"Fiery",id:"890228870559698955"}],U={plugin:"https://github.com/SerStars/EnmityPlugins/releases/latest/download/StealEmoji.js",manifest:"https://github.com/SerStars/EnmityPlugins/releases/latest/download/manifest.json",changelog:"New plugin",source:"https://github.com/SerStars/EnmityPlugins/StealEmoji"},$="#000001",V={name:B,version:O,description:G,authors:z,updater:U,color:$};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const Y=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const K=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const H=e.Text;e.TextInput,e.TouchableHighlight;const F=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const R=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const X=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const q=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;function c(o){return window.enmity.assets.getIDByName(o)}const l={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,i)=>window.enmity.modules.filters.byName(o,i),byTypeName:(o,i)=>window.enmity.modules.filters.byTypeName(o,i),byDisplayName:(o,i)=>window.enmity.modules.filters.byDisplayName(o,i)};function W(...o){return window.enmity.modules.bulk(...o)}window.enmity.modules.common;const[u,J,Q,Z,ee,oe,te]=W(l.byProps("openLazy","hideActionSheet"),l.byProps("ButtonColors","ButtonLooks","ButtonSizes"),l.byProps("TextStyleSheet"),l.byProps("uploadEmoji"),l.byProps("getGuilds"),l.byProps("GuildIconSizes"),l.byProps("can","_dispatcher"));var ne=J.default,ie=Q.Text.render;const M=f.createStackNavigator();var me=({name:o="Page",component:i=R}={})=>{const m=a.createThemedStyleSheet({container:{backgroundColor:a.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:a.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:d.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:a.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:a.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),r=({onPress:n,title:s})=>t.createElement(F,{onPress:n},t.createElement(H,{style:m.text},s));return t.createElement(D.NavigationContainer,{independent:!0},t.createElement(M.Navigator,{initialRouteName:o,style:m.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:m.card,headerStyle:m.header,headerTitleContainerStyle:{color:d.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(M.Screen,{name:o,component:i,options:{headerTitleStyle:{color:"white",fontFamily:d.Fonts.PRIMARY_NORMAL},headerLeft:()=>t.createElement(r,{title:"Close",onPress:()=>{h.pop()}}),...f.TransitionPresets.ModalSlideFromBottomIOS}})))};function P(o,i){fetch(o).then(m=>{m.blob().then(r=>{const n=new FileReader;n.readAsDataURL(r),n.onloadend=()=>{i(n.result)}})})}var re=oe.default;const ae=d.Permissions,le=c("ic_add_reaction"),se=c("Check");function de({emojiNode:o}){const i=Object.entries(ee.getGuilds()).filter(([r,n])=>te.can(ae.MANAGE_GUILD_EXPRESSIONS,n)),m=(r,n)=>{P(o.src,s=>{Z.uploadEmoji({guildId:r,image:s,name:o.alt,roles:void 0}).then(()=>{p.open({content:`Added ${o.alt} to ${n}`,source:se}),h.pop()})})};return t.createElement(K,null,i.map(([r,n])=>t.createElement(F,{onPress:()=>m(r,n==null?void 0:n.name)},t.createElement(q,{leading:t.createElement(re,{guild:n,size:"LARGE",animate:!1}),label:n==null?void 0:n.name,trailing:t.createElement(Y,{source:le})}))))}const ce=c("toast_copy_message_link"),ue=c("ic_message_copy"),g=a.createThemedStyleSheet({divider:{backgroundColor:a.ThemeColorMap.BACKGROUND_ACCENT,marginLeft:0,marginTop:16},title:{flexDirection:"column",paddingTop:16},button:{marginTop:16}});function ye({emojiNode:o}){const i=[{text:"Add to Server",callback:()=>{u.hideActionSheet(),h.push(me,{component:()=>t.createElement(de,{emojiNode:o}),name:"Add to Server"})}},{text:"Copy URL to clipboard",callback:()=>{N.setString(o.src),p.open({content:`Copied ${o.alt}'s URL to clipboard`,source:ce}),u.hideActionSheet()}},{text:"Copy image to clipboard",callback:()=>P(o.src,m=>{N.setImage(m.split(",")[1]),p.open({content:`Copied ${o.alt}'s image to clipboard`,source:ue}),u.hideActionSheet()})}];return t.createElement(t.Fragment,null,t.createElement(X,{style:g.divider}),t.createElement(R,{style:g.title},t.createElement(ie,{variant:"eyebrow",color:"header-secondary"},"StealEmoji")),i.map(({text:m,callback:r})=>t.createElement(ne,{color:"brand",text:m,size:"small",onPress:r,style:g.button})))}const y=_("StealEmoji"),we={...V,onStart(){y.before(u,"openLazy",(o,[i,m],r)=>{m==="MessageEmojiActionSheet"&&i.then(n=>{const s=y.after(n,"default",(pe,[{emojiNode:k}],w)=>{var S,b,v,A,C;if(s(),k.type!=="customEmoji")return w;const L=(C=(A=(v=(b=(S=w==null?void 0:w.props)==null?void 0:S.children)==null?void 0:b.props)==null?void 0:v.children)==null?void 0:A.props)==null?void 0:C.children,I=y.after(L,"type",(he,[{emojiNode:j}],T)=>{var E;return t.useEffect(()=>()=>I(),[]),(E=T.props)==null||E.children.push(t.createElement(ye,{emojiNode:j})),T})})})})},onStop(){y.unpatchAll()}};x(we);
