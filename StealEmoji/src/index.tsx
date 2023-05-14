import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import Manifest from './manifest.json';
import StealmojiSection from './components/StealmojiSection';
import { LazyActionSheet } from './modules';

const Patcher = create("stealmoji");

const Stealmoji: Plugin = {
   ...Manifest,

   onStart() {
      // Patch openLazy
      Patcher.before(LazyActionSheet, "openLazy", (_, [component, sheet], _res) => {
         // Check for MessageEmojiActionSheet
         if (sheet === "MessageEmojiActionSheet") {
            // if it's MessageEmojiActionSheet then in we go
            component.then((instance) => {
               // Patch default of instance
               const unpatchInstance = Patcher.after(instance, "default", (_, [{ emojiNode }], res) => {
                  unpatchInstance()
                  // If emoji isn't custom then don't do anything
                  if (emojiNode.type !== 'customEmoji') return res

                  // Patch EmojiInfo (made up name, it contains the info about the emoji)
                  const EmojiInfo = res?.props?.children?.props?.children?.props?.children
                  const unpatchEmojiInfo = Patcher.after(EmojiInfo, "type", (_, [{ emojiNode }], res) => {
                     // Unpatch on unmount
                     React.useEffect(() => {
                        return () => unpatchEmojiInfo()
                     }, [])

                     // Patch in stealmoji additions if not already added
                     res.props?.children.push(<StealmojiSection emojiNode={emojiNode} />)
                     return res
                  })
               })
            })
         }
      })
   },

   onStop() {
      Patcher.unpatchAll()
   }
};

registerPlugin(Stealmoji);
