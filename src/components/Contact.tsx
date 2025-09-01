import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以整合實際的郵件服務
    const mailtoLink = `mailto:changshancheng@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`
姓名: ${formData.name}
Email: ${formData.email}

訊息:
${formData.message}
    `)}`;
    
    window.location.href = mailtoLink;
  };

  const downloadResume = () => {
    // 創建一個示例簡歷下載功能
    const link = document.createElement('a');
    link.href = '/resume_chang_shan_cheng.pdf'; // 您需要將簡歷PDF放在public資料夾中
    link.download = 'Chang_Shan_Cheng_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>聯絡我</h2>
          <p>讓我們一起討論您的 AI 專案需求</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>電子郵件</h3>
              <p>changshancheng@example.com</p>
              <p>24小時內回覆</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>電話</h3>
              <p>+886 912-345-678</p>
              <p>週一至週五 9:00-18:00</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>位置</h3>
              <p>台灣 台北市</p>
              <p>可遠端工作</p>
            </div>

            <div className="social-links">
              <h3>社群媒體</h3>
              <div className="social-icons">
                <a href="https://github.com/changshancheng" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💻</span>
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/changshancheng" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:changshancheng@example.com">
                  <span className="social-icon">📧</span>
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="resume-section">
              <h3>履歷下載</h3>
              <button className="resume-btn" onClick={downloadResume}>
                <span className="resume-icon">📄</span>
                下載我的履歷
              </button>
              <p className="resume-note">包含完整的工作經驗與專案詳情</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>發送訊息</h3>
              
              <div className="form-group">
                <label htmlFor="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="請輸入您的姓名"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">電子郵件 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="請輸入您的Email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">主旨 *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="請輸入郵件主旨"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">訊息內容 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="請詳細描述您的專案需求或想要討論的內容..."
                />
              </div>

              <button type="submit" className="submit-btn">
                <span>發送訊息</span>
                <span className="btn-icon">📤</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;