// 新闻页面交互功能

// 新闻数据
const newsData = {
    1: {
        title: "站桩入门：新手必知的基础要领",
        date: "2024年1月15日",
        category: "basic",
        views: 1234,
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
        category: "health",
        views: 956,
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
        `
    },
    3: {
        title: "四季站桩法：春季养生的最佳选择",
        date: "2024年1月10日",
        category: "health",
        views: 1567,
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
        `
    }
};

// 所有新闻数据（包含更多文章）
const allNewsData = [
    {
        id: 1,
        title: "站桩入门：新手必知的基础要领",
        date: "2024年1月15日",
        category: "basic",
        views: 1234,
        excerpt: "掌握正确的站桩姿势是成功练习的关键。本文详细介绍了站桩的基本要求、呼吸方法和注意事项。",
        color: "blue"
    },
    {
        id: 2,
        title: "科学证实：站桩对心血管健康的积极影响",
        date: "2024年1月12日",
        category: "health",
        views: 956,
        excerpt: "最新研究表明，长期坚持站桩练习能够显著改善心血管功能，降低高血压风险。",
        color: "green"
    },
    {
        id: 3,
        title: "四季站桩法：春季养生的最佳选择",
        date: "2024年1月10日",
        category: "health",
        views: 1567,
        excerpt: "春季是万物复苏的季节，也是调养身体的黄金时期。了解如何在春季进行有效的站桩练习。",
        color: "purple"
    },
    {
        id: 4,
        title: "提升免疫力：站桩练习的神奇功效",
        date: "2024年1月8日",
        category: "health",
        views: 823,
        excerpt: "通过规律的站桩练习，不仅能强身健体，还能显著提升免疫系统功能。",
        color: "orange"
    },
    {
        id: 5,
        title: "缓解压力：现代人的站桩养生之道",
        date: "2024年1月5日",
        category: "health",
        views: 1891,
        excerpt: "在快节奏的现代生活中，站桩成为缓解工作压力、平静心神的有效方法。",
        color: "red"
    },
    {
        id: 6,
        title: "站桩古法新解：传统功法的现代科学验证",
        date: "2024年1月3日",
        category: "advanced",
        views: 678,
        excerpt: "古老的站桩功法在现代科学的验证下，展现出更多令人惊叹的健康益处。",
        color: "indigo"
    },
    {
        id: 7,
        title: "女性站桩：调理内分泌的天然良方",
        date: "2024年1月1日",
        category: "health",
        views: 1345,
        excerpt: "站桩练习对女性内分泌系统有着特殊的调理作用，帮助改善月经不调、更年期症状。",
        color: "pink"
    },
    {
        id: 8,
        title: "老年人站桩指南：安全有效的养生之法",
        date: "2023年12月28日",
        category: "basic",
        views: 2134,
        excerpt: "针对老年朋友的身体特点，制定安全有效的站桩练习方案。",
        color: "teal"
    },
    {
        id: 9,
        title: "站桩与冥想：身心合一的修炼之道",
        date: "2023年12月25日",
        category: "advanced",
        views: 567,
        excerpt: "将站桩与冥想相结合，不仅能强身健体，更能达到身心和谐、精神升华的境界。",
        color: "yellow"
    },
    {
        id: 10,
        title: "站桩进阶技巧：从入门到精通的修炼历程",
        date: "2023年12月22日",
        category: "advanced",
        views: 890,
        excerpt: "详细解析站桩练习的各个阶段，从基础桩法到高级技巧。",
        color: "gray"
    }
];

let currentFilter = 'all';
let displayedNewsCount = 3;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化筛选按钮事件
    const filterButtons = document.querySelectorAll('button[onclick^="filterNews"]');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 更新按钮样式
            filterButtons.forEach(btn => {
                btn.className = 'bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition';
            });
            this.className = 'bg-white text-apple-blue px-6 py-2 rounded-full hover:bg-gray-100 transition';
        });
    });

    console.log('新闻页面已加载完成！');
});

// 筛选新闻
window.filterNews = function(category) {
    currentFilter = category;
    displayedNewsCount = 3;
    renderNewsList();
    
    // 更新按钮样式
    const filterButtons = document.querySelectorAll('button[onclick^="filterNews"]');
    filterButtons.forEach(button => {
        if (button.getAttribute('onclick').includes(category)) {
            button.className = 'bg-white text-apple-blue px-6 py-2 rounded-full hover:bg-gray-100 transition';
        } else {
            button.className = 'bg-white/20 text-white px-6 py-2 rounded-full hover:bg-white/30 transition';
        }
    });
};

// 渲染新闻列表
function renderNewsList() {
    const newsList = document.getElementById('newsList');
    const filteredNews = currentFilter === 'all' 
        ? allNewsData 
        : allNewsData.filter(news => news.category === currentFilter);
    
    const newsToShow = filteredNews.slice(0, displayedNewsCount);
    
    let html = '';
    
    newsToShow.forEach(news => {
        const categoryMap = {
            'basic': { name: '基础入门', color: 'blue' },
            'health': { name: '健康养生', color: 'green' },
            'advanced': { name: '进阶技巧', color: 'purple' }
        };
        
        const category = categoryMap[news.category] || { name: '其他', color: 'gray' };
        
        // 获取颜色样式
        const colorMap = {
            'blue': 'bg-gradient-to-br from-blue-500 to-blue-600',
            'green': 'bg-gradient-to-br from-green-500 to-green-600', 
            'purple': 'bg-gradient-to-br from-purple-500 to-purple-600',
            'orange': 'bg-gradient-to-br from-orange-500 to-orange-600',
            'red': 'bg-gradient-to-br from-red-500 to-red-600',
            'indigo': 'bg-gradient-to-br from-indigo-500 to-indigo-600',
            'pink': 'bg-gradient-to-br from-pink-500 to-pink-600',
            'teal': 'bg-gradient-to-br from-teal-500 to-teal-600',
            'yellow': 'bg-gradient-to-br from-yellow-500 to-yellow-600',
            'gray': 'bg-gradient-to-br from-gray-500 to-gray-600'
        };
        
        const categoryColorMap = {
            'blue': 'bg-blue-100 text-blue-600',
            'green': 'bg-green-100 text-green-600',
            'purple': 'bg-purple-100 text-purple-600'
        };
        
        const bgColor = colorMap[news.color] || colorMap['gray'];
        const catColor = categoryColorMap[category.color] || 'bg-gray-100 text-gray-600';

        html += `
            <article class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer news-item" 
                     data-category="${news.category}" onclick="openNewsDetail(${news.id})">
                <div class="md:flex">
                    <div class="md:w-1/3 h-48 md:h-auto ${bgColor} flex items-center justify-center">
                        <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <div class="md:w-2/3 p-6">
                        <div class="flex items-center mb-2">
                            <span class="${catColor} px-2 py-1 rounded text-xs mr-2">${category.name}</span>
                            <span class="text-gray-500 text-sm">${news.date}</span>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-apple-dark hover:text-apple-blue transition">
                            ${news.title}
                        </h2>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                            ${news.excerpt}
                        </p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center text-gray-500 text-sm">
                                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>${news.views} 阅读</span>
                            </div>
                            <span class="text-apple-blue text-sm font-semibold">阅读更多 →</span>
                        </div>
                    </div>
                </div>
            </article>
        `;
    });
    
    // 添加加载更多按钮
    if (displayedNewsCount < filteredNews.length) {
        html += `
            <div class="text-center py-8">
                <button class="bg-apple-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition" onclick="loadMoreNews()">
                    加载更多资讯 (${filteredNews.length - displayedNewsCount} 篇)
                </button>
            </div>
        `;
    } else if (filteredNews.length > 3) {
        html += `
            <div class="text-center py-8 text-gray-500">
                已显示全部 ${filteredNews.length} 篇资讯
            </div>
        `;
    }
    
    newsList.innerHTML = html;
}

// 加载更多新闻
window.loadMoreNews = function() {
    displayedNewsCount += 3;
    renderNewsList();
};

// 打开新闻详情
window.openNewsDetail = function(newsId) {
    const modal = document.getElementById('newsDetailModal');
    const detailTitle = document.getElementById('detailTitle');
    const detailDate = document.getElementById('detailDate');
    const detailContent = document.getElementById('detailContent');
    
    const news = newsData[newsId];
    if (news) {
        detailTitle.textContent = news.title;
        detailDate.textContent = news.date;
        detailContent.innerHTML = news.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // 增加阅读数
        const newsItem = allNewsData.find(item => item.id === newsId);
        if (newsItem) {
            newsItem.views += 1;
        }
    } else {
        // 如果没有详细内容，显示基本信息
        const basicNews = allNewsData.find(item => item.id === newsId);
        if (basicNews) {
            detailTitle.textContent = basicNews.title;
            detailDate.textContent = basicNews.date;
            detailContent.innerHTML = `
                <p class="text-lg mb-4">${basicNews.excerpt}</p>
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold mb-3">更多内容正在完善中...</h3>
                    <p class="text-gray-600">我们正在为您准备更详细的内容，请关注我们的更新。</p>
                    <div class="mt-4">
                        <a href="index.html" class="inline-block bg-apple-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                            返回首页了解更多
                        </a>
                    </div>
                </div>
            `;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }
};

// 关闭新闻详情
window.closeNewsDetail = function() {
    const modal = document.getElementById('newsDetailModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
};

// 点击模态框背景关闭
document.addEventListener('click', function(e) {
    const modal = document.getElementById('newsDetailModal');
    if (e.target === modal) {
        closeNewsDetail();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeNewsDetail();
    }
});

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    renderNewsList();
}); 