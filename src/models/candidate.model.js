import { DataTypes } from 'sequelize';
import db from '../configs/db.config.js';

// Galleries attribute database schema
export const Candidate = db.define('Candidates', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    studentId: {
        allowNull: true,
        type: DataTypes.STRING
    },
    guardianId: {
        allowNull: true,
        type: DataTypes.STRING
    },
    familyId: {
        allowNull: true,
        type: DataTypes.STRING
    },
    namaLengkap: {
        allowNull: false,
        type: DataTypes.STRING
    },
    namaPanggilan: {
        allowNull: false,
        type: DataTypes.STRING
    },
    jenisKelamin: {
        type: DataTypes.ENUM,
        values: ['laki-laki', 'perempuan'] 
    },
    tempatLahir: {
        type: DataTypes.STRING
    },
    tanggalLahir: {
        type: DataTypes.DATE
    },
    agama: {
        type: DataTypes.STRING
    },
    tinggiBadan: {
        type: DataTypes.INTEGER
    },
    beratBadan: {
        type: DataTypes.INTEGER
    },
    alamat: {
        type: DataTypes.STRING
    },
    rt: {
        type: DataTypes.STRING
    },
    rw: {
        type: DataTypes.STRING
    },
    kelurahan: {
        type: DataTypes.STRING
    },
    kecamatan: {
        type: DataTypes.STRING
    },
    kabupaten: {
        type: DataTypes.STRING
    },
    provinsi: {
        type: DataTypes.STRING
    },
    kodePos: {
        type: DataTypes.STRING
    },
    noTelp: {
        type: DataTypes.STRING
    },
    sekolahAsal: {
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
});
