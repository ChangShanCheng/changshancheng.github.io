import { useState } from 'react';
import { Mail, MapPin, FileText, Globe, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profile } from '../data/profile';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `姓名: ${form.name}\nEmail: ${form.email}\n\n訊息:\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section alt contact">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Contact</div>
          <h2>聯絡我</h2>
          <p>歡迎討論 AI 應用、文件自動化、LLM Agent 或工作機會。</p>
        </div>

        <div className="contact-grid">
          <div className="contact-side">
            <a className="card card-hover info reveal" href={`mailto:${profile.email}`}>
              <span className="icon-tile brand"><Mail size={20} /></span>
              <div>
                <h4>電子郵件</h4>
                <p>{profile.email}</p>
                <small>通常 24 小時內回覆</small>
              </div>
            </a>
            <div className="card info reveal d1">
              <span className="icon-tile"><MapPin size={20} /></span>
              <div>
                <h4>位置</h4>
                <p>{profile.location}</p>
                <small>可配合北部工作，接受遠端 / 混合</small>
              </div>
            </div>
            <div className="social reveal d2">
              <a className="card card-hover social-link" href={profile.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon size={18} /> GitHub
              </a>
              <a className="card card-hover social-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>
            <div className="card resume reveal d3">
              <h4><FileText size={18} /> 履歷下載</h4>
              <div className="resume-buttons">
                <a className="btn primary" href={profile.resumePdfZh} target="_blank" rel="noopener noreferrer">中文履歷 (PDF)</a>
                <a className="btn outline" href={profile.resumePdfEn} target="_blank" rel="noopener noreferrer">English Resume (PDF)</a>
                <a className="resume-link" href={profile.resumeHtml} target="_blank" rel="noopener noreferrer">
                  <Globe size={14} /> 線上版（可切換語言）
                </a>
              </div>
              <small>最後更新：2026 年 9 月</small>
            </div>
          </div>

          <form className="card contact-form reveal d1" onSubmit={onSubmit}>
            <h3>發送訊息</h3>
            <div className="form-row">
              <label>
                <span>姓名 *</span>
                <input name="name" value={form.name} onChange={onChange} required placeholder="您的姓名" />
              </label>
              <label>
                <span>電子郵件 *</span>
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="your@email.com" />
              </label>
            </div>
            <label>
              <span>主旨 *</span>
              <input name="subject" value={form.subject} onChange={onChange} required placeholder="例如：AI 應用工程師職缺" />
            </label>
            <label>
              <span>訊息內容 *</span>
              <textarea name="message" value={form.message} onChange={onChange} required rows={6} placeholder="請描述您想討論的內容或職缺資訊..." />
            </label>
            <button type="submit" className="btn primary full">
              <Send size={16} /> 以 Email 發送
            </button>
            <small>送出後會開啟你的郵件程式，內容已預先填好。</small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
