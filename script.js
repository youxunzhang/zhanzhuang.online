// 站桩功法网站交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <a href="#features" onclick="closeMobileMenu()">功能特色</a>
        <a href="#how-it-works" onclick="closeMobileMenu()">学习方法</a>
        <a href="#news" onclick="closeMobileMenu()">养生资讯</a>
        <a href="#testimonials" onclick="closeMobileMenu()">学员评价</a>
        <a href="#faq" onclick="closeMobileMenu()">常见问题</a>
    `;
    
    if (mobileMenuBtn) {
        document.body.appendChild(mobileMenu);
        
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // FAQ 展开/收起功能
    window.toggleFaq = function(button) {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('svg');
        
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            arrow.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            arrow.style.transform = 'rotate(0deg)';
        }
    };

    // 关闭移动端菜单
    window.closeMobileMenu = function() {
        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    };

    // 平滑滚动到指定元素
    function smoothScrollTo(targetId) {
        const target = document.querySelector(targetId);
        if (target) {
            const headerHeight = 80; // 导航栏高度
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // 为所有锚点链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                smoothScrollTo(targetId);
            }
        });
    });

    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });



    // 特色功能卡片动画
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 按钮点击反馈
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 创建点击波纹效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 表单验证和提交
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证
            const inputs = form.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500');
                } else {
                    input.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                showMessage('提交成功！我们会尽快与您联系。', 'success');
                form.reset();
            } else {
                showMessage('请填写所有必填字段。', 'error');
            }
        });
    });

    // 显示消息
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // 懒加载图片
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // 监听窗口大小变化，处理移动端适配
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });

    // 站桩计时器功能（可选）
    let timer = null;
    let seconds = 0;
    
    window.startTimer = function() {
        if (timer) return;
        
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    };
    
    window.stopTimer = function() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    };
    
    window.resetTimer = function() {
        stopTimer();
        seconds = 0;
        updateTimerDisplay();
    };
    
    function updateTimerDisplay() {
        const timerDisplay = document.getElementById('timer-display');
        if (timerDisplay) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
    }

    // 页面加载完成后隐藏加载动画
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000);
    }

    // 滚动进度指示器
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300';
    scrollIndicator.style.width = '0%';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });

    // 添加页面可见性检测
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            document.title = '站桩功法 - 期待您的回来！';
        } else {
            document.title = '站桩功法 - 专业站桩学习平台';
        }
    });

    console.log('站桩功法网站已加载完成！欢迎开始您的站桩学习之旅！');
});

// 新闻数据
const newsData = {
    1: {
        title: "站桩入门：新手必知的基础要领",
        date: "2024年1月15日",
        content: `
            <h3>站桩的基本姿势</h3>
            <p>站桩是中华传统养生功法的重要组成部分，正确的姿势是练习成功的关键。初学者应该从最基本的自然站立开始：</p>
            <ul>
                <li><strong>双脚分开：</strong>与肩同宽，脚尖稍微内扣</li>
                <li><strong>膝盖微曲：</strong>保持自然弯曲，不要完全锁死</li>
                <li><strong>腰部放松：</strong>保持自然挺直，不要刻意挺胸</li>
                <li><strong>双臂环抱：</strong>如抱大树般，手臂自然下垂</li>
            </ul>
            
            <h3>呼吸要领</h3>
            <p>站桩练习中，呼吸是至关重要的环节：</p>
            <ul>
                <li>采用腹式呼吸，深长缓慢</li>
                <li>吸气时腹部自然鼓起</li>
                <li>呼气时腹部自然收缩</li>
                <li>保持呼吸的自然节奏，不要强迫</li>
            </ul>
            
            <h3>初学者注意事项</h3>
            <p>为了安全有效地练习站桩，初学者需要注意以下几点：</p>
            <ul>
                <li>练习时间从5-10分钟开始，逐步增加</li>
                <li>选择安静、空气清新的环境</li>
                <li>穿着宽松舒适的衣服</li>
                <li>避免在饱食或过饿时练习</li>
                <li>如有不适应立即停止</li>
            </ul>
        `
    },
    2: {
        title: "科学证实：站桩对心血管健康的积极影响",
        date: "2024年1月12日",
        content: `
            <h3>最新研究发现</h3>
            <p>北京中医药大学的最新研究表明，坚持站桩练习3个月以上的人群，其心血管健康指标有显著改善：</p>
            <ul>
                <li>收缩压平均下降8-12mmHg</li>
                <li>舒张压平均下降5-8mmHg</li>
                <li>心率变异性提升15%</li>
                <li>血液循环改善20%</li>
            </ul>
            
            <h3>作用机理</h3>
            <p>站桩对心血管系统的益处主要体现在以下几个方面：</p>
            <ul>
                <li><strong>血管扩张：</strong>深度放松状态促进血管扩张</li>
                <li><strong>心率调节：</strong>呼吸节律帮助稳定心率</li>
                <li><strong>血液循环：</strong>静态锻炼促进微循环</li>
                <li><strong>神经调节：</strong>激活副交感神经系统</li>
            </ul>
            
            <h3>专家建议</h3>
            <p>心血管专家建议，患有轻度高血压的人群可以将站桩作为辅助治疗方法，但需要注意：</p>
            <ul>
                <li>在医生指导下进行</li>
                <li>定期监测血压变化</li>
                <li>结合药物治疗，不可替代</li>
                <li>出现不适立即就医</li>
            </ul>
        `
    },
    3: {
        title: "四季站桩法：春季养生的最佳选择",
        date: "2024年1月10日",
        content: `
            <h3>春季养生原理</h3>
            <p>春季是万物复苏的季节，人体的阳气开始上升，是调养身体的最佳时机。春季站桩应该遵循"养阳"的原则：</p>
            <ul>
                <li>选择朝阳的地方练习</li>
                <li>练习时间选在上午7-9点</li>
                <li>注重疏肝理气</li>
                <li>配合深呼吸调节</li>
            </ul>
            
            <h3>春季站桩要点</h3>
            <p>针对春季的气候特点，站桩练习有特殊的要求：</p>
            <ul>
                <li><strong>姿势调整：</strong>双臂稍微向上，模拟树木向阳生长</li>
                <li><strong>意念引导：</strong>想象身体如春苗般向上生长</li>
                <li><strong>呼吸配合：</strong>深长的呼吸，感受生机勃勃</li>
                <li><strong>时间安排：</strong>每次15-30分钟为宜</li>
            </ul>
            
            <h3>春季常见问题</h3>
            <p>春季练习站桩时，需要注意以下常见问题：</p>
            <ul>
                <li>春困现象：可适当缩短练习时间</li>
                <li>过敏反应：选择花粉较少的环境</li>
                <li>情绪波动：通过站桩稳定心神</li>
                <li>湿气重：注意保暖防潮</li>
            </ul>
        `
    },
    4: {
        title: "提升免疫力：站桩练习的神奇功效",
        date: "2024年1月8日",
        content: `
            <h3>免疫系统与站桩</h3>
            <p>现代医学研究发现，站桩练习能够显著提升人体免疫力，主要机制包括：</p>
            <ul>
                <li>激活T细胞和NK细胞活性</li>
                <li>提高免疫球蛋白水平</li>
                <li>增强白细胞吞噬能力</li>
                <li>调节免疫系统平衡</li>
            </ul>
            
            <h3>实验数据支持</h3>
            <p>上海中医药大学的对照实验显示：</p>
            <ul>
                <li>练习站桩6个月的实验组，感冒发生率降低40%</li>
                <li>免疫细胞活性提升25%</li>
                <li>炎症指标明显下降</li>
                <li>整体健康评分提升30%</li>
            </ul>
            
            <h3>提升免疫力的站桩方法</h3>
            <p>为了最大化免疫力提升效果，建议采用以下方法：</p>
            <ul>
                <li><strong>固定时间：</strong>每天同一时间练习</li>
                <li><strong>渐进增加：</strong>从10分钟逐步增加到30分钟</li>
                <li><strong>配合冥想：</strong>在站桩过程中放空思维</li>
                <li><strong>持续坚持：</strong>至少坚持3个月以上</li>
            </ul>
        `
    },
    5: {
        title: "缓解压力：现代人的站桩养生之道",
        date: "2024年1月5日",
        content: `
            <h3>现代人的压力现状</h3>
            <p>现代社会节奏快、压力大，长期的精神紧张导致各种健康问题：</p>
            <ul>
                <li>睡眠质量下降</li>
                <li>情绪波动较大</li>
                <li>注意力难以集中</li>
                <li>身体疲劳感强</li>
            </ul>
            
            <h3>站桩的减压机制</h3>
            <p>站桩练习通过以下机制帮助缓解压力：</p>
            <ul>
                <li><strong>神经调节：</strong>激活副交感神经，抑制交感神经</li>
                <li><strong>荷尔蒙平衡：</strong>降低皮质醇水平，增加内啡肽</li>
                <li><strong>肌肉放松：</strong>缓解肌肉紧张状态</li>
                <li><strong>心理调节：</strong>培养专注力和觉察力</li>
            </ul>
            
            <h3>办公室站桩方法</h3>
            <p>针对办公室人群，推荐以下简化版站桩方法：</p>
            <ul>
                <li>利用工作间隙进行5分钟站桩</li>
                <li>在办公桌前进行静态站立</li>
                <li>配合深呼吸和肩部放松</li>
                <li>每2小时进行一次</li>
            </ul>
            
            <h3>效果评估</h3>
            <p>坚持站桩练习的人群报告：</p>
            <ul>
                <li>睡眠质量改善85%</li>
                <li>工作效率提升20%</li>
                <li>情绪稳定性增强</li>
                <li>疲劳感明显减轻</li>
            </ul>
        `
    },
    6: {
        title: "站桩古法新解：传统功法的现代科学验证",
        date: "2024年1月3日",
        content: `
            <h3>古法传承</h3>
            <p>站桩功法起源于中国古代，有着悠久的历史传承：</p>
            <ul>
                <li>《黄帝内经》中的"恬淡虚无"理念</li>
                <li>道家"站桩修炼"的养生方法</li>
                <li>武术界"桩功"的基础训练</li>
                <li>中医"静功"的治疗手段</li>
            </ul>
            
            <h3>现代科学验证</h3>
            <p>现代医学技术为传统站桩功法提供了科学依据：</p>
            <ul>
                <li><strong>脑电图研究：</strong>显示α波增加，大脑放松</li>
                <li><strong>心率变异性：</strong>自主神经功能改善</li>
                <li><strong>血液检测：</strong>压力激素水平下降</li>
                <li><strong>影像学：</strong>血流灌注增加</li>
            </ul>
            
            <h3>传统与现代的结合</h3>
            <p>将传统智慧与现代科学结合，形成了新的站桩理论：</p>
            <ul>
                <li>保留传统的姿势要求</li>
                <li>结合现代的生理学原理</li>
                <li>使用科学的训练方法</li>
                <li>制定个性化的练习方案</li>
            </ul>
            
            <h3>未来发展方向</h3>
            <p>站桩功法的现代化发展趋势：</p>
            <ul>
                <li>结合AI技术进行姿势纠正</li>
                <li>使用可穿戴设备监测效果</li>
                <li>开发个性化训练程序</li>
                <li>建立标准化评估体系</li>
            </ul>
        `
    },
    7: {
        title: "女性站桩：调理内分泌的天然良方",
        date: "2024年1月1日",
        content: `
            <h3>女性生理特点</h3>
            <p>女性由于特殊的生理结构和激素变化，在不同生理期有不同的健康需求：</p>
            <ul>
                <li>月经期：需要温和的调理</li>
                <li>排卵期：适合加强练习</li>
                <li>更年期：需要稳定情绪</li>
                <li>孕期：需要特殊的指导</li>
            </ul>
            
            <h3>站桩对女性的特殊益处</h3>
            <p>站桩练习对女性健康有独特的调理作用：</p>
            <ul>
                <li><strong>调节月经：</strong>改善月经不调、痛经</li>
                <li><strong>缓解更年期：</strong>减少潮热、情绪波动</li>
                <li><strong>美容养颜：</strong>促进血液循环，改善肤色</li>
                <li><strong>减压安神：</strong>缓解焦虑、抑郁情绪</li>
            </ul>
            
            <h3>女性专用站桩法</h3>
            <p>针对女性特点设计的站桩方法：</p>
            <ul>
                <li><strong>柔和站桩：</strong>动作轻柔，注重内在调节</li>
                <li><strong>调经站桩：</strong>配合腹部按摩，调理气血</li>
                <li><strong>美颜站桩：</strong>结合面部按摩，促进循环</li>
                <li><strong>安神站桩：</strong>配合冥想，平静心神</li>
            </ul>
            
            <h3>注意事项</h3>
            <p>女性练习站桩时需要注意：</p>
            <ul>
                <li>经期适当减少练习强度</li>
                <li>孕期需要专业指导</li>
                <li>更年期可以适当增加练习时间</li>
                <li>配合适当的营养补充</li>
            </ul>
        `
    },
    8: {
        title: "老年人站桩指南：安全有效的养生之法",
        date: "2023年12月28日",
        content: `
            <h3>老年人的健康挑战</h3>
            <p>随着年龄增长，老年人面临多种健康挑战：</p>
            <ul>
                <li>肌肉力量逐渐下降</li>
                <li>平衡能力减弱</li>
                <li>骨密度降低</li>
                <li>慢性疾病增多</li>
            </ul>
            
            <h3>站桩对老年人的益处</h3>
            <p>站桩练习特别适合老年人，具有以下益处：</p>
            <ul>
                <li><strong>提升平衡：</strong>增强本体感觉，预防跌倒</li>
                <li><strong>强化肌肉：</strong>维持肌肉力量和耐力</li>
                <li><strong>改善骨密度：</strong>轻度负重有助骨骼健康</li>
                <li><strong>调节血压：</strong>有助于控制高血压</li>
            </ul>
            
            <h3>老年人站桩要点</h3>
            <p>老年人练习站桩需要特别注意以下要点：</p>
            <ul>
                <li><strong>循序渐进：</strong>从5分钟开始，逐步增加</li>
                <li><strong>安全第一：</strong>旁边准备椅子或扶手</li>
                <li><strong>因人而异：</strong>根据身体状况调整强度</li>
                <li><strong>定期评估：</strong>监测血压、心率变化</li>
            </ul>
            
            <h3>常见疾病的站桩调理</h3>
            <p>针对老年人常见疾病的站桩方法：</p>
            <ul>
                <li><strong>高血压：</strong>轻柔站桩，注重呼吸调节</li>
                <li><strong>糖尿病：</strong>定时站桩，有助血糖控制</li>
                <li><strong>关节炎：</strong>微动站桩，减轻关节负担</li>
                <li><strong>失眠：</strong>晚间轻度站桩，安神助眠</li>
            </ul>
        `
    },
    9: {
        title: "站桩与冥想：身心合一的修炼之道",
        date: "2023年12月25日",
        content: `
            <h3>站桩与冥想的结合</h3>
            <p>站桩与冥想的结合是东方智慧的精华体现：</p>
            <ul>
                <li>身体的静止状态</li>
                <li>心灵的专注状态</li>
                <li>呼吸的调节状态</li>
                <li>意识的觉察状态</li>
            </ul>
            
            <h3>身心合一的境界</h3>
            <p>通过站桩冥想，可以达到身心合一的境界：</p>
            <ul>
                <li><strong>身体层面：</strong>肌肉放松，气血流通</li>
                <li><strong>心理层面：</strong>思维宁静，情绪稳定</li>
                <li><strong>精神层面：</strong>意识清明，觉察敏锐</li>
                <li><strong>能量层面：</strong>内气充沛，精神饱满</li>
            </ul>
            
            <h3>站桩冥想的方法</h3>
            <p>具体的站桩冥想练习方法：</p>
            <ul>
                <li><strong>准备阶段：</strong>调整姿势，放松身心</li>
                <li><strong>入静阶段：</strong>专注呼吸，排除杂念</li>
                <li><strong>深入阶段：</strong>体验内在，感受能量</li>
                <li><strong>收功阶段：</strong>缓慢结束，记录体验</li>
            </ul>
            
            <h3>高级修炼技巧</h3>
            <p>进阶练习者可以尝试以下技巧：</p>
            <ul>
                <li>观想练习：想象能量在体内流动</li>
                <li>数息法：配合呼吸计数</li>
                <li>内视法：感受身体内部变化</li>
                <li>无念法：达到无思无虑的状态</li>
            </ul>
        `
    },
    10: {
        title: "站桩进阶技巧：从入门到精通的修炼历程",
        date: "2023年12月22日",
        content: `
            <h3>站桩的三个阶段</h3>
            <p>站桩修炼可以分为三个明显的阶段：</p>
            <ul>
                <li><strong>初级阶段：</strong>学会正确姿势，适应静止状态</li>
                <li><strong>中级阶段：</strong>体会内在变化，调节呼吸节奏</li>
                <li><strong>高级阶段：</strong>达到身心合一，进入深层状态</li>
            </ul>
            
            <h3>初级阶段要点</h3>
            <p>初学者需要掌握的基本要点：</p>
            <ul>
                <li>正确的站立姿势</li>
                <li>自然的呼吸方式</li>
                <li>适当的练习时间</li>
                <li>放松的心理状态</li>
            </ul>
            
            <h3>中级阶段技巧</h3>
            <p>中级练习者应该注重以下技巧：</p>
            <ul>
                <li><strong>意念导引：</strong>用意念引导能量流动</li>
                <li><strong>呼吸深化：</strong>练习更深层的呼吸</li>
                <li><strong>时间延长：</strong>逐步增加练习时间</li>
                <li><strong>变化练习：</strong>尝试不同的桩法</li>
            </ul>
            
            <h3>高级阶段修炼</h3>
            <p>高级练习者的修炼重点：</p>
            <ul>
                <li><strong>内功修炼：</strong>培养内在能量</li>
                <li><strong>境界提升：</strong>追求精神层面的提升</li>
                <li><strong>传承发展：</strong>传授给他人，发扬光大</li>
                <li><strong>个人特色：</strong>形成自己的练习风格</li>
            </ul>
            
            <h3>常见问题解答</h3>
            <p>进阶过程中的常见问题：</p>
            <ul>
                <li>如何突破平台期？</li>
                <li>怎样保持长期动力？</li>
                <li>如何处理身体反应？</li>
                <li>怎样选择适合的桩法？</li>
            </ul>
        `
    }
};

// 打开新闻模态框
function openNewsModal(newsId) {
    const modal = document.getElementById('newsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalContent = document.getElementById('modalContent');
    
    const news = newsData[newsId];
    if (news) {
        modalTitle.textContent = news.title;
        modalDate.textContent = news.date;
        modalContent.innerHTML = news.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

// 关闭新闻模态框
function closeNewsModal() {
    const modal = document.getElementById('newsModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 点击模态框背景关闭
document.addEventListener('click', function(e) {
    const modal = document.getElementById('newsModal');
    if (e.target === modal) {
        closeNewsModal();
    }
});

// 添加 CSS 动画样式
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
