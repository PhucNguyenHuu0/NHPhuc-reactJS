import React, { useEffect, useState } from 'react'
import axios from '../Api/nhpapi'


export default function NhpSinhVienAddOrEdit({onNhpClose, onNhpSubmitForm, renderStudent, isEdit}) {
    console.log(renderStudent);
    const [nhpMaSV, setNhpMaSV] = useState(0);
    const [nhpHoSV, setNhpHoSV] = useState("");
    const [nhpTenSV, setNhpTenSV] = useState("");
    const [nhpPhai, setNhpPhai] = useState("");
    const [nhpNgaySinh, setNhpNgaySinh] = useState("");
    const [nhpNoiSinh, setNhpNoiSinh] = useState("");
    const [nhpMaKH, setNhpMaKH] = useState("");
    const [nhpHocBong, setNhpHocBong] = useState("");
    const [nhpDiemTrungBinh, setNhpDiemTrungBinh] = useState("");

    useEffect(() => {
        if (renderStudent) {
            setNhpMaSV(renderStudent.MaSV);
            setNhpHoSV(renderStudent.HoSV);
            setNhpTenSV(renderStudent.TenSV);
            setNhpPhai(renderStudent.Phai);
            setNhpNgaySinh(renderStudent.NgaySinh);
            setNhpNoiSinh(renderStudent.NgaySinh);
            setNhpMaKH(renderStudent.NgaySinh);
            setNhpHocBong(renderStudent.HocBong);
            setNhpDiemTrungBinh(renderStudent.DiemTrungBinh);
        }
    }, [renderStudent]);
    const nhpHandleClose = () => {
        onNhpClose(false);
    }

    const nhpHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(nhpMaSV, nhpHoSV, nhpTenSV, nhpPhai, nhpNgaySinh, nhpNoiSinh, nhpMaKH, nhpHocBong, nhpDiemTrungBinh);
        let NhpObjectStudent = {
            MaSV: nhpMaSV,
            HoSV: nhpHoSV,
            TenSV: nhpTenSV,
            Phai: nhpPhai,
            NgaySinh: nhpNgaySinh,
            NoiSinh: nhpNoiSinh,
            MaKH: nhpMaKH,
            HocBong: nhpHocBong,
            DiemTrungBinh: nhpDiemTrungBinh
        }
        const nhpRes = await axios.post("NhpStudent", NhpObjectStudent);
        onNhpSubmitForm(false);
    }
    return (
       <div>
         <h2>{isEdit ? 'Update Student' : 'Them moi Student'}</h2>
        <form>
        <div className='border'>
            <div class="input-group mb-3">
                <span class="input-group-text" id="MaSV">MaSV</span>
                <input type="text" class="form-control"
                    name='MaSV' value={nhpMaSV} onChange={(ev) => setNhpMaSV(ev.target.value)}
                    placeholder="MaSV"n-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="HoSV">HoSV</span>
                <input type="text" class="form-control"
                    name='HoSV' value={nhpHoSV} onChange={(ev) => setNhpHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="TenSV">TenSV</span>
                <input type="TenSV" class="form-control"
                    name='TenSV' value={setNhpTenSV} onChange={(ev) => setNhpTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Phai">Phai</span>
                <input type="Phai" class="form-control"
                    name='Phai' value={nhpPhai} onChange={(ev) => setNhpPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="number" class="form-control"
                    name='NoiSinh' value={nhpNoiSinh} onChange={(ev) => setNhpNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="MaKH">MaKH</span>
                <input type="number" class="form-control"
                    name='MaKH' value={nhpMaKH} onChange={(ev) => setNhpMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="HocBong">HocBong</span>
                <input type="number" class="form-control"
                    name='HocBong' value={nhpHocBong} onChange={(ev) => setNhpHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="number" class="form-control"
                    name='DiemTrungBinh' value={nhpDiemTrungBinh} onChange={(ev) => setNhpDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnNhpSave' onClick={(ev) => nhpHandleSubmit(ev)}>Ghi lai</button>
            <button className='btn btn-danger' onClick={nhpHandleClose}>Dong</button>
            
        </div>
        </form>
       </div>
    )
}