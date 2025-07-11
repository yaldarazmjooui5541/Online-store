import React, { useState } from 'react';
import './Sabtnam.css';

function SabtnamForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateData = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'نام را وارد کنید';
        if (!formData.email.includes('@')) newErrors.email = 'ایمیل نامعتبر است';
        if (formData.password.length < 6) newErrors.password = 'رمز عبور باید حداقل ۶ کاراکتر باشد';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateData();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('ارسال اطلاعات:', formData);
            alert('ثبت‌ نام با موفقیت انجام شد!');
        }
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>فرم ثبت‌نام</h2>

            <label>
                <b>نام:</b>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
            </label>

            <label>
                <b> ایمیل:</b>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
            </label>

            <label>
                <b>رمز عبور:</b>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span className="error">{errors.password}</span>}
            </label>

            <button type="submit"><b>ثبت‌ نام</b></button>
        </form>
    );
}

export default SabtnamForm;
