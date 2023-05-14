import { FormDivider, View } from "enmity/components";
import { Navigation, React, StyleSheet, Toasts, Clipboard } from "enmity/metro/common";
import { getIDByName } from 'enmity/api/assets';
import { LazyActionSheet } from "../modules";
import Button from "./Button";
import Text from "./Text";
import Page from "./Page";
import AddEmojiGuildSelect from "./AddEmojiGuildSelect";
import fetchImage from "../func/fetchImage";

// Icons
const CopyLink = getIDByName('toast_copy_message_link')
const CopyFile = getIDByName('ic_message_copy')

interface EmojiNode {
	frozenSrc: string
	type: string
	jumboable: boolean
	src: string
	alt: string
	id: string
}

const styles = StyleSheet.createThemedStyleSheet({
	divider: {
		backgroundColor: StyleSheet.ThemeColorMap.BACKGROUND_ACCENT,
		marginLeft: 0,
		marginTop: 16,
	},
	title: {
		flexDirection: "column",
		paddingTop: 16
	},
	button: { marginTop: 16 }
})

export default function StealmojiSection({ emojiNode }) {
	const copyEmojiUrlCallback = () => {
		// Copy emoji URL
		Clipboard.setString(emojiNode.src)
		Toasts.open({ content: `Copied ${emojiNode.alt}'s URL to clipboard`, source: CopyLink })
		// Close the actionsheet
		LazyActionSheet.hideActionSheet()
	}

	const copyEmojiImageCallback = () =>
		fetchImage(emojiNode.src, (dataUrl) => {
			// Copy emoji URL
			Clipboard.setImage(dataUrl.split(',')[1])
			Toasts.open({ content: `Copied ${emojiNode.alt}'s image to clipboard`, source: CopyFile })
			// Close the actionsheet
			LazyActionSheet.hideActionSheet()
		})

	const addToServerCallback = () => {
		// Close actionsheet
		LazyActionSheet.hideActionSheet()
		// Open server picker to add emoji to
		Navigation.push(Page, { component: () => <AddEmojiGuildSelect emojiNode={emojiNode} />, name: 'Add to Server' })
	}

	const buttons = [
		{ text: "Add to Server", callback: addToServerCallback },
		{ text: "Copy URL to clipboard", callback: copyEmojiUrlCallback },
		{ text: "Copy image to clipboard", callback: copyEmojiImageCallback }
	]

	return (
		<>
			<FormDivider style={styles.divider} />
			<View style={styles.title}>
				<Text variant="eyebrow" color="header-secondary">Stealmoji</Text>
			</View>
			{buttons.map(({ text, callback }) =>
				<Button
					color='brand'
					text={text}
					size='small'
					onPress={callback}
					style={styles.button}
				/>
			)}
		</>
	)
}
