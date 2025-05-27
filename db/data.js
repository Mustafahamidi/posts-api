const posts = [
  {
    "id": 1,
    "title": "Understanding JavaScript Closures",
    "content": "Understanding JavaScript Closures - This article covers essential concepts and practical tips for developers.",
    "author": "Charlotte Gray",
    "date": "2025-01-02",
    "category": "DevOps",
    "likes": 88
  },
  {
    "id": 2,
    "title": "How to Structure Your React Projects",
    "content": "How to Structure Your React Projects - This article covers essential concepts and practical tips for developers.",
    "author": "Liam Johnson",
    "date": "2025-01-03",
    "category": "React",
    "likes": 134
  },
  {
    "id": 3,
    "title": "Integrating APIs in Frontend Projects",
    "content": "Integrating APIs in Frontend Projects - This article covers essential concepts and practical tips for developers.",
    "author": "Lucas Morgan",
    "date": "2025-01-04",
    "category": "Frontend",
    "likes": 106
  },
  {
    "id": 4,
    "title": "Understanding Event Loop in JavaScript",
    "content": "Understanding Event Loop in JavaScript - This article covers essential concepts and practical tips for developers.",
    "author": "Grace Parker",
    "date": "2025-01-05",
    "category": "Productivity",
    "likes": 61
  },
  {
    "id": 5,
    "title": "Building RESTful APIs with Express",
    "content": "Building RESTful APIs with Express - This article covers essential concepts and practical tips for developers.",
    "author": "Mia Brooks",
    "date": "2025-01-06",
    "category": "TypeScript",
    "likes": 58
  },
  {
    "id": 6,
    "title": "Getting Started with Next.js",
    "content": "Getting Started with Next.js - This article covers essential concepts and practical tips for developers.",
    "author": "Isabella Cox",
    "date": "2025-01-07",
    "category": "Web Development",
    "likes": 142
  },
  {
    "id": 7,
    "title": "CSS Grid vs Flexbox: When to Use What?",
    "content": "CSS Grid vs Flexbox: When to Use What? - This article covers essential concepts and practical tips for developers.",
    "author": "Benjamin Reed",
    "date": "2025-01-08",
    "category": "CSS",
    "likes": 173
  },
  {
    "id": 8,
    "title": "Clean Code Principles for Developers",
    "content": "Clean Code Principles for Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Ava Bennett",
    "date": "2025-01-09",
    "category": "Frontend",
    "likes": 91
  },
  {
    "id": 9,
    "title": "Performance Optimization in Web Apps",
    "content": "Performance Optimization in Web Apps - This article covers essential concepts and practical tips for developers.",
    "author": "James Miller",
    "date": "2025-01-10",
    "category": "Frontend",
    "likes": 174
  },
  {
    "id": 10,
    "title": "Responsive Design Best Practices",
    "content": "Responsive Design Best Practices - This article covers essential concepts and practical tips for developers.",
    "author": "Oliver Hayes",
    "date": "2025-01-11",
    "category": "CSS",
    "likes": 138
  },
  {
    "id": 11,
    "title": "Handling Forms in React",
    "content": "Handling Forms in React - This article covers essential concepts and practical tips for developers.",
    "author": "Mason Hughes",
    "date": "2025-01-12",
    "category": "React",
    "likes": 97
  },
  {
    "id": 12,
    "title": "An Introduction to MongoDB Aggregation",
    "content": "An Introduction to MongoDB Aggregation - This article covers essential concepts and practical tips for developers.",
    "author": "Emma Collins",
    "date": "2025-01-13",
    "category": "MongoDB",
    "likes": 148
  },
  {
    "id": 13,
    "title": "Node.js Streams Explained",
    "content": "Node.js Streams Explained - This article covers essential concepts and practical tips for developers.",
    "author": "Amelia Scott",
    "date": "2025-01-14",
    "category": "Node.js",
    "likes": 125
  },
  {
    "id": 14,
    "title": "Top 10 VS Code Extensions for Developers",
    "content": "Top 10 VS Code Extensions for Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Ethan Price",
    "date": "2025-01-15",
    "category": "Productivity",
    "likes": 163
  },
  {
    "id": 15,
    "title": "Writing Accessible Web Applications",
    "content": "Writing Accessible Web Applications - This article covers essential concepts and practical tips for developers.",
    "author": "Sophia Turner",
    "date": "2025-01-16",
    "category": "Web Development",
    "likes": 77
  },
  {
    "id": 16,
    "title": "Debugging Tips for Front-End Developers",
    "content": "Debugging Tips for Front-End Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Ella Cooper",
    "date": "2025-01-17",
    "category": "Frontend",
    "likes": 154
  },
  {
    "id": 17,
    "title": "Mastering TypeScript: The Key Concepts",
    "content": "Mastering TypeScript: The Key Concepts - This article covers essential concepts and practical tips for developers.",
    "author": "Noah Edwards",
    "date": "2025-01-18",
    "category": "TypeScript",
    "likes": 130
  },
  {
    "id": 18,
    "title": "Securing Your Node.js Applications",
    "content": "Securing Your Node.js Applications - This article covers essential concepts and practical tips for developers.",
    "author": "Elijah Foster",
    "date": "2025-01-19",
    "category": "Node.js",
    "likes": 123
  },
  {
    "id": 19,
    "title": "Building Real-Time Apps with Socket.io",
    "content": "Building Real-Time Apps with Socket.io - This article covers essential concepts and practical tips for developers.",
    "author": "Grace Parker",
    "date": "2025-01-20",
    "category": "Node.js",
    "likes": 112
  },
  {
    "id": 20,
    "title": "The Future of React: Trends to Watch",
    "content": "The Future of React: Trends to Watch - This article covers essential concepts and practical tips for developers.",
    "author": "Harper Mitchell",
    "date": "2025-01-21",
    "category": "React",
    "likes": 104
  },
  {
    "id": 21,
    "title": "Integrating APIs in Frontend Projects",
    "content": "Integrating APIs in Frontend Projects - This article covers essential concepts and practical tips for developers.",
    "author": "Oliver Hayes",
    "date": "2025-01-22",
    "category": "Frontend",
    "likes": 95
  },
  {
    "id": 22,
    "title": "Clean Code Principles for Developers",
    "content": "Clean Code Principles for Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Ava Bennett",
    "date": "2025-01-23",
    "category": "Frontend",
    "likes": 143
  },
  {
    "id": 23,
    "title": "Building RESTful APIs with Express",
    "content": "Building RESTful APIs with Express - This article covers essential concepts and practical tips for developers.",
    "author": "Emma Collins",
    "date": "2025-01-24",
    "category": "Node.js",
    "likes": 158
  },
  {
    "id": 24,
    "title": "Understanding JavaScript Closures",
    "content": "Understanding JavaScript Closures - This article covers essential concepts and practical tips for developers.",
    "author": "Liam Johnson",
    "date": "2025-01-25",
    "category": "JavaScript",
    "likes": 111
  },
  {
    "id": 25,
    "title": "How to Structure Your React Projects",
    "content": "How to Structure Your React Projects - This article covers essential concepts and practical tips for developers.",
    "author": "Logan Bailey",
    "date": "2025-01-26",
    "category": "React",
    "likes": 159
  },
  {
    "id": 26,
    "title": "Getting Started with Next.js",
    "content": "Getting Started with Next.js - This article covers essential concepts and practical tips for developers.",
    "author": "Lucas Morgan",
    "date": "2025-01-27",
    "category": "Web Development",
    "likes": 100
  },
  {
    "id": 27,
    "title": "Performance Optimization in Web Apps",
    "content": "Performance Optimization in Web Apps - This article covers essential concepts and practical tips for developers.",
    "author": "James Miller",
    "date": "2025-01-28",
    "category": "Web Development",
    "likes": 172
  },
  {
    "id": 28,
    "title": "Debugging Tips for Front-End Developers",
    "content": "Debugging Tips for Front-End Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Benjamin Reed",
    "date": "2025-01-29",
    "category": "Frontend",
    "likes": 96
  },
  {
    "id": 29,
    "title": "Responsive Design Best Practices",
    "content": "Responsive Design Best Practices - This article covers essential concepts and practical tips for developers.",
    "author": "Ella Cooper",
    "date": "2025-01-30",
    "category": "CSS",
    "likes": 170
  },
  {
    "id": 30,
    "title": "Mastering TypeScript: The Key Concepts",
    "content": "Mastering TypeScript: The Key Concepts - This article covers essential concepts and practical tips for developers.",
    "author": "Sophia Turner",
    "date": "2025-01-31",
    "category": "TypeScript",
    "likes": 147
  },
  {
    "id": 31,
    "title": "Top 10 VS Code Extensions for Developers",
    "content": "Top 10 VS Code Extensions for Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Ethan Price",
    "date": "2025-02-01",
    "category": "Productivity",
    "likes": 144
  },
  {
    "id": 32,
    "title": "Writing Accessible Web Applications",
    "content": "Writing Accessible Web Applications - This article covers essential concepts and practical tips for developers.",
    "author": "Amelia Scott",
    "date": "2025-02-02",
    "category": "Web Development",
    "likes": 165
  },
  {
    "id": 33,
    "title": "An Introduction to MongoDB Aggregation",
    "content": "An Introduction to MongoDB Aggregation - This article covers essential concepts and practical tips for developers.",
    "author": "Mia Brooks",
    "date": "2025-02-03",
    "category": "MongoDB",
    "likes": 151
  },
  {
    "id": 34,
    "title": "Understanding Event Loop in JavaScript",
    "content": "Understanding Event Loop in JavaScript - This article covers essential concepts and practical tips for developers.",
    "author": "Noah Edwards",
    "date": "2025-02-04",
    "category": "JavaScript",
    "likes": 109
  },
  {
    "id": 35,
    "title": "Handling Forms in React",
    "content": "Handling Forms in React - This article covers essential concepts and practical tips for developers.",
    "author": "Harper Mitchell",
    "date": "2025-02-05",
    "category": "React",
    "likes": 141
  },
  {
    "id": 36,
    "title": "Node.js Streams Explained",
    "content": "Node.js Streams Explained - This article covers essential concepts and practical tips for developers.",
    "author": "Charlotte Gray",
    "date": "2025-02-06",
    "category": "Node.js",
    "likes": 140
  },
  {
    "id": 37,
    "title": "The Future of React: Trends to Watch",
    "content": "The Future of React: Trends to Watch - This article covers essential concepts and practical tips for developers.",
    "author": "Mason Hughes",
    "date": "2025-02-07",
    "category": "React",
    "likes": 90
  },
  {
    "id": 38,
    "title": "CSS Grid vs Flexbox: When to Use What?",
    "content": "CSS Grid vs Flexbox: When to Use What? - This article covers essential concepts and practical tips for developers.",
    "author": "Isabella Cox",
    "date": "2025-02-08",
    "category": "CSS",
    "likes": 125
  },
  {
    "id": 39,
    "title": "Securing Your Node.js Applications",
    "content": "Securing Your Node.js Applications - This article covers essential concepts and practical tips for developers.",
    "author": "Logan Bailey",
    "date": "2025-02-09",
    "category": "Node.js",
    "likes": 120
  },
  {
    "id": 40,
    "title": "Building Real-Time Apps with Socket.io",
    "content": "Building Real-Time Apps with Socket.io - This article covers essential concepts and practical tips for developers.",
    "author": "Oliver Hayes",
    "date": "2025-02-10",
    "category": "Node.js",
    "likes": 102
  },
  {
    "id": 41,
    "title": "Understanding JavaScript Closures",
    "content": "Understanding JavaScript Closures - This article covers essential concepts and practical tips for developers.",
    "author": "Charlotte Gray",
    "date": "2025-02-11",
    "category": "JavaScript",
    "likes": 117
  },
  {
    "id": 42,
    "title": "How to Structure Your React Projects",
    "content": "How to Structure Your React Projects - This article covers essential concepts and practical tips for developers.",
    "author": "James Miller",
    "date": "2025-02-12",
    "category": "React",
    "likes": 137
  },
  {
    "id": 43,
    "title": "Integrating APIs in Frontend Projects",
    "content": "Integrating APIs in Frontend Projects - This article covers essential concepts and practical tips for developers.",
    "author": "Sophia Turner",
    "date": "2025-02-13",
    "category": "Frontend",
    "likes": 131
  },
  {
    "id": 44,
    "title": "Debugging Tips for Front-End Developers",
    "content": "Debugging Tips for Front-End Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Liam Johnson",
    "date": "2025-02-14",
    "category": "Frontend",
    "likes": 119
  },
  {
    "id": 45,
    "title": "Writing Accessible Web Applications",
    "content": "Writing Accessible Web Applications - This article covers essential concepts and practical tips for developers.",
    "author": "Ethan Price",
    "date": "2025-02-15",
    "category": "Web Development",
    "likes": 129
  },
  {
    "id": 46,
    "title": "Performance Optimization in Web Apps",
    "content": "Performance Optimization in Web Apps - This article covers essential concepts and practical tips for developers.",
    "author": "Ella Cooper",
    "date": "2025-02-16",
    "category": "Web Development",
    "likes": 126
  },
  {
    "id": 47,
    "title": "Mastering TypeScript: The Key Concepts",
    "content": "Mastering TypeScript: The Key Concepts - This article covers essential concepts and practical tips for developers.",
    "author": "Ava Bennett",
    "date": "2025-02-17",
    "category": "TypeScript",
    "likes": 144
  },
  {
    "id": 48,
    "title": "Clean Code Principles for Developers",
    "content": "Clean Code Principles for Developers - This article covers essential concepts and practical tips for developers.",
    "author": "Mia Brooks",
    "date": "2025-02-18",
    "category": "Productivity",
    "likes": 155
  },
  {
    "id": 49,
    "title": "Getting Started with Next.js",
    "content": "Getting Started with Next.js - This article covers essential concepts and practical tips for developers.",
    "author": "Benjamin Reed",
    "date": "2025-02-19",
    "category": "Web Development",
    "likes": 149
  },
  {
    "id": 50,
    "title": "Building RESTful APIs with Express",
    "content": "Building RESTful APIs with Express - This article covers essential concepts and practical tips for developers.",
    "author": "Noah Edwards",
    "date": "2025-02-20",
    "category": "Node.js",
    "likes": 139
  }
]

export default posts