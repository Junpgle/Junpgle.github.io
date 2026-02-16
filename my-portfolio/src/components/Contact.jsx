import React, { useState } from 'react';
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const API_URL = '/api/contact';

const Contact = ({ isDark, theme }) => {
    const [formState, setFormState] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok && data.success) {
                setFormState('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setFormState('idle'), 5000);
            } else throw new Error(data.msg || 'Error');
        } catch (error) {
            setFormState('error');
            setErrorMessage(error.message);
        }
    };

    return (
        <section id="contact" className={`py-24 px-6 md:px-8 transition-colors ${theme.colors.bg}`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left w-full">
                    <h2 className="text-6xl md:text-8xl font-black mb-8 font-diary">联系我.</h2>
                    <a href="mailto:junpgle@qq.com" className="inline-flex items-center space-x-6 group">
                        <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all shadow-xl group-hover:${theme.colors.primaryBg} ${theme.colors.iconBg} ${theme.colors.accentBorder}`}>
                            <Mail className={`w-6 h-6 transition-colors group-hover:text-white ${theme.colors.primary}`} />
                        </div>
                        <div className={`text-2xl font-black group-hover:${theme.colors.primary}`}>junpgle@qq.com</div>
                    </a>
                </div>

                <div className={`w-full max-w-lg p-8 rounded-[2.5rem] border shadow-2xl relative overflow-hidden ${theme.colors.iconBg} ${theme.colors.accentBorder}`}>
                    {formState === 'success' ? (
                        <div className="py-10 text-center">
                            <CheckCircle2 className={`w-20 h-20 mx-auto mb-8 ${theme.colors.primary}`} />
                            <h3 className="text-3xl font-black mb-4">已送达</h3>
                            <button onClick={() => setFormState('idle')} className={`font-bold ${theme.colors.primary}`}>发送另一条</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* 错误提示 */}
                            {formState === 'error' && (
                                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" /> {errorMessage}
                                </div>
                            )}

                            {['Name', 'Email'].map((field) => (
                                <div className="relative" key={field}>
                                    <label className="text-[9px] font-black uppercase tracking-widest opacity-50 absolute -top-5 left-2">{field}</label>
                                    <input
                                        name={field.toLowerCase()}
                                        value={formData[field.toLowerCase()]}
                                        onChange={handleInputChange}
                                        placeholder={field}
                                        className={`w-full border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-opacity-50 transition-all outline-none ${theme.colors.bg} placeholder:opacity-40`}
                                        style={{ '--tw-ring-color': 'currentColor' }} // Trick for dynamic ring color
                                    />
                                </div>
                            ))}

                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message..."
                                    rows="3"
                                    className={`w-full border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-opacity-50 transition-all outline-none ${theme.colors.bg} placeholder:opacity-40`}
                                ></textarea>
                            </div>

                            <button disabled={formState === 'loading'} type="submit" className={`w-full font-black py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center space-x-3 ${theme.colors.button}`}>
                                {formState === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span className="text-xs uppercase tracking-widest">Send</span><Send className="w-4 h-4" /></>}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
export default Contact;