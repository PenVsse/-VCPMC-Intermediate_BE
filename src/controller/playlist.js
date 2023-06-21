import BanGhi from "../model/BanGhi";
import Playlist from "../model/Playlist"
import BanGhiPlaylist from "../model/BanGhiPlaylist";

const getAll = async (req, res) => {
    try {
        Playlist.hasMany(BanGhiPlaylist, { foreignKey: 'playlistId' });
        BanGhiPlaylist.belongsTo(BanGhi, { foreignKey: 'banGhiId' });

        const data = await Playlist.findAll({
            include: [{
                model: BanGhiPlaylist,
                include: [{
                    model: BanGhi
                }]
            }]
        });

        res.status(200).json({
            data,
            message: 'Success'
        })
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Server error'
        })
    }
}

const getPlaylistById = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        Playlist.hasMany(BanGhiPlaylist, { foreignKey: 'playlistId' });
        BanGhiPlaylist.belongsTo(BanGhi, { foreignKey: 'banGhiId' });

        const data = await Playlist.findOne({
            include: [{
                model: BanGhiPlaylist,
                include: [{
                    model: BanGhi
                }]
            }],
            where: {
                id
            }
        })

        res.status(200).json({
            data,
            message: 'Success'
        })
    } catch (error) {
        res.status(500).json({
            error,
            message: 'Server error'
        })
    }
}

export {
    getAll,
    getPlaylistById
}