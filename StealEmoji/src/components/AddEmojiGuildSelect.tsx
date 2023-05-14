import { getIDByName } from "enmity/api/assets"
import { FormRow, Image, ScrollView, TouchableOpacity } from "enmity/components"
import { Constants, Navigation, React, Toasts } from "enmity/metro/common"
import fetchImage from "../func/fetchImage"
import { EmojiModule, GuildStore, PermissionsStore } from "../modules"
import GuildIcon from "./GuildIcon"

const Permissions = Constants.Permissions

const AddEmoji = getIDByName('ic_add_reaction')
const Checkmark = getIDByName('Check')

export default function AddEmojiGuildSelect({ emojiNode }) {
	// Get guilds as a Array of ID and value pairs, and filter out guilds the user can't edit emojis in
	const guilds = Object.entries(GuildStore.getGuilds()).filter(([guildId, guild]) => PermissionsStore.can(Permissions.MANAGE_GUILD_EXPRESSIONS, guild))

	const addToServerCallback = (guildId, guildName) => {
		// Fetch emoji
		fetchImage(emojiNode.src, (dataUrl) => {
			// Upload emoji
			EmojiModule.uploadEmoji({
				guildId: guildId,
				image: dataUrl,
				name: emojiNode.alt,
				roles: undefined
			}).then(() => {
				Toasts.open({ content: `Added ${emojiNode.alt} to ${guildName}`, source: Checkmark })
				Navigation.pop()
			})
		})
	}

	return (
		<ScrollView>
			{guilds.map(([guildId, guild]) =>
				<TouchableOpacity onPress={() => addToServerCallback(guildId, guild?.name)}>
					<FormRow
						leading={<GuildIcon guild={guild} size="LARGE" animate={false} />}
						label={guild?.name}
						trailing={<Image source={AddEmoji} />}
					/>
				</TouchableOpacity>

			)}
		</ScrollView>
	)
}
