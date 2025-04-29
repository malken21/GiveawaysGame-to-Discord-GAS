// Discord Webhook URL
const DISCORD_WEBHOOK_URL = 'DISCORD_WEBHOOK_URL';

const DOMAIN_LIST = ["store.steampowered.com", "store.epicgames.com"];

// Discordに送信される payload
const payload = text => {
    return {
        "content": `${text}`
    }
}