module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "En Cours De Dev..."
        }
    });
};