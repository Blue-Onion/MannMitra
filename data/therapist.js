export const therapists = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialization: "Clinical Psychologist",
    experience: "7",
    languages: ["English", "Hindi"],

    image:
      "https://instagram.fdel18-1.fna.fbcdn.net/v/t51.2885-19/456079137_478783731711556_1460810785270465175_n.jpg?_nc_ht=instagram.fdel18-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QEgFP0nmfqOg8n0W4rnozOH8qyf1K_y2XKtye2BrarfVprd80ipZeGryRbSlCGjFWw&_nc_ohc=3lqQmSyVnjIQ7kNvwFRbqIi&_nc_gid=3x9Sc-sjWS6TrWfhVVGqAQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfKBGM-f1es13kDMw8s815mj0xiLDBeFSzfRbD9BhNjklQ&oe=68242460&_nc_sid=7a9f4b",
    rating: 4.8,
    expertise: ["Depression", "Anxiety", "Stress"],
    sessionMode: {
      online: ["chat", "call", "meeting"],
      offline: ["Delhi"],
    },
    fees: "1500",
  },
  {
    id: 2,
    name: "Mr. Rahul Mehta",
    specialization: "Counseling Psychologist",
    experience: "5",
    languages: ["English", "Hindi"],

    image:
      "https://assets.theinnerhour.com/profilepics/cf/v3/Soumya_Jagatdeb.png",
    rating: 4.5,
    expertise: ["Relationship Issues", "Career Counseling"],
    sessionMode: {
      online: ["call", "meeting"],
    },
    fees: "1200",
  },
  {
    id: 3,
    name: "Ms. Neha Kapoor",
    specialization: "Child Psychologist",
    experience: "6",
    languages: ["English", "Hindi"],

    image: "data:image/png;base64,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",
    rating: 4.6,
    expertise: ["Child Development", "Behavioral Issues"],
    sessionMode: {
      offline: ["Bangalore"],
    },
    fees: "1300",
  },
  {
    id: 4,
    name: "Dr. Arjun Verma",
    specialization: "Clinical Psychologist",
    experience: "8",
    languages: ["English", "Kannada"],

    image: "https://picsum.photos/seed/4/300/200",
    rating: 4.9,
    expertise: ["Trauma", "OCD", "Anxiety"],
    sessionMode: {
      online: ["chat", "call", "meeting"],
      offline: ["Bangalore"],
    },
    fees: "1800",
  },
  {
    id: 5,
    name: "Ms. Riya Sen",
    specialization: "Relationship Counselor",
    experience: "4",
    languages: ["English", "Bengali"],

    image: "https://picsum.photos/seed/5/300/200",
    rating: 4.3,
    expertise: ["Marital Issues", "Family Therapy"],
    sessionMode: {
      online: ["call"],
    },
    fees: "1000",
  },
  {
    id: 6,
    name: "Dr. Kiran Deshmukh",
    specialization: "Psychiatrist",
    experience: "10",
    languages: ["English", "Marathi"],

    image: "https://picsum.photos/seed/6/300/200",
    rating: 4.7,
    expertise: ["Schizophrenia", "Bipolar Disorder", "Medication Management"],
    sessionMode: {
      offline: ["Pune"],
    },
    fees: "2000",
  },
  {
    id: 7,
    name: "Mr. Akash Singh",
    specialization: "Stress Management Specialist",
    experience: "3",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/71/300/200",
    rating: 4.1,
    expertise: ["Burnout", "Workplace Stress", "Mindfulness"],
    sessionMode: {
      online: ["chat", "meeting"],
    },
    fees: "900",
  },
  {
    id: 8,
    name: "Ms. Priya Nair",
    specialization: "Cognitive Behavioral Therapist",
    experience: "6",
    languages: ["English", "Malayalam"],

    image: "https://picsum.photos/seed/8/300/200",
    rating: 4.6,
    expertise: ["Panic Disorder", "Social Anxiety", "Phobias"],
    sessionMode: {
      online: ["call"],
      offline: ["Kochi"],
    },
    fees: "1400",
  },
  {
    id: 9,
    name: "Dr. Ravi Kumar",
    specialization: "Psychiatrist",
    experience: "12",
    languages: ["English", "Telugu"],

    image: "https://picsum.photos/seed/9/300/200",
    rating: 4.8,
    expertise: ["Depression", "Anxiety Disorders", "Sleep Disorders"],
    sessionMode: {
      offline: ["Hyderabad"],
    },
    fees: "2200",
  },
  {
    id: 10,
    name: "Ms. Sneha Joshi",
    specialization: "Grief Counselor",
    experience: "5",
    languages: ["English", "Marathi"],

    image: "https://picsum.photos/seed/10/300/200",
    rating: 4.4,
    expertise: ["Loss and Bereavement", "Coping with Grief"],
    sessionMode: {
      online: ["chat", "call"],
    },
    fees: "1100",
  },
  {
    id: 11,
    name: "Dr. Sameer Patil",
    specialization: "Clinical Psychologist",
    experience: "9",
    languages: ["English", "Marathi"],

    image: "https://picsum.photos/seed/11/300/200",
    rating: 4.7,
    expertise: ["Personality Disorders", "Trauma-informed Therapy"],
    sessionMode: {
      online: ["meeting"],
      offline: ["Pune"],
    },
    fees: "1900",
  },
  {
    id: 12,
    name: "Ms. Kavya Reddy",
    specialization: "Child Psychologist",
    experience: "7",
    languages: ["English", "Telugu"],

    image: "https://picsum.photos/seed/12/300/200",
    rating: 4.5,
    expertise: ["ADHD", "Autism Spectrum Disorders"],
    sessionMode: {
      offline: ["Hyderabad"],
    },
    fees: "1600",
  },
  {
    id: 13,
    name: "Mr. Saurabh Jain",
    specialization: "Couples Therapist",
    experience: "6",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/13/300/200",
    rating: 4.4,
    expertise: ["Communication Issues", "Conflict Resolution"],
    sessionMode: {
      online: ["call", "meeting"],
      offline: ["Delhi"],
    },
    fees: "1500",
  },
  {
    id: 14,
    name: "Dr. Nisha Pillai",
    specialization: "Psychiatrist",
    experience: "11",
    languages: ["English", "Malayalam"],

    image: "https://picsum.photos/seed/14/300/200",
    rating: 4.9,
    expertise: ["Mood Disorders", "Anxiety Disorders", "Psychotic Disorders"],
    sessionMode: {
      offline: ["Kochi"],
    },
    fees: "2100",
  },
  {
    id: 15,
    name: "Ms. Tanya Bhatt",
    specialization: "Counseling Psychologist",
    experience: "4",
    languages: ["English", "Gujarati"],

    image: "https://picsum.photos/seed/15/300/200",
    rating: 4.2,
    expertise: ["Self-esteem Issues", "Personal Growth"],
    sessionMode: {
      online: ["chat"],
    },
    fees: "1000",
  },
  {
    id: 16,
    name: "Dr. Ashok Menon",
    specialization: "Clinical Psychologist",
    experience: "10",
    languages: ["English", "Malayalam"],

    image: "https://picsum.photos/seed/16/300/200",
    rating: 4.8,
    expertise: ["Eating Disorders", "Body Image Issues"],
    sessionMode: {
      online: ["call", "meeting"],
      offline: ["Trivandrum"],
    },
    fees: "2000",
  },
  {
    id: 17,
    name: "Ms. Bhavna Kapoor",
    specialization: "Grief Counselor",
    experience: "5",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/17/300/200",
    rating: 4.3,
    expertise: ["Sudden Loss", "Chronic Illness Grief"],
    sessionMode: {
      offline: ["Chandigarh"],
    },
    fees: "1200",
  },
  {
    id: 18,
    name: "Mr. Manish Gupta",
    specialization: "Stress Management Specialist",
    experience: "6",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/18/300/200",
    rating: 4.5,
    expertise: ["Time Management", "Relaxation Techniques"],
    sessionMode: {
      online: ["meeting"],
    },
    fees: "1100",
  },
  {
    id: 19,
    name: "Dr. Meera Iyer",
    specialization: "Cognitive Behavioral Therapist",
    experience: "8",
    languages: ["English", "Tamil"],

    image: "https://picsum.photos/seed/19/300/200",
    rating: 4.7,
    expertise: ["Cognitive Restructuring", "Behavioral Activation"],
    sessionMode: {
      online: ["chat", "call"],
      offline: ["Chennai"],
    },
    fees: "1700",
  },
  {
    id: 20,
    name: "Ms. Alisha Khan",
    specialization: "Relationship Counselor",
    experience: "4",
    languages: ["English", "Urdu"],

    image: "https://picsum.photos/seed/20/300/200",
    rating: 4.2,
    expertise: ["Pre-marital Counseling", "Divorce Counseling"],
    sessionMode: {
      online: ["call", "meeting"],
    },
    fees: "1000",
  },
  {
    id: 21,
    name: "Mr. Harish Venkatesh",
    specialization: "Couples Therapist",
    experience: "7",
    languages: ["English", "Tamil"],

    image: "https://picsum.photos/seed/21/300/200",
    rating: 4.6,
    expertise: ["Infidelity", "Intimacy Issues"],
    sessionMode: {
      offline: ["Chennai"],
    },
    fees: "1600",
  },
  {
    id: 22,
    name: "Ms. Juhi Patel",
    specialization: "Child Psychologist",
    experience: "6",
    languages: ["English", "Gujarati"],

    image: "https://picsum.photos/seed/22/300/200",
    rating: 4.5,
    expertise: ["Learning Disabilities", "Social Skills Development"],
    sessionMode: {
      online: ["meeting"],
      offline: ["Ahmedabad"],
    },
    fees: "1500",
  },
  {
    id: 23,
    name: "Dr. Vikram Chauhan",
    specialization: "Psychiatrist",
    experience: "12",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/23/300/200",
    rating: 4.9,
    expertise: ["Severe Mental Illness", "Treatment Planning"],
    sessionMode: {
      offline: ["Delhi"],
    },
    fees: "2200",
  },
  {
    id: 24,
    name: "Ms. Pooja Singh",
    specialization: "Stress Management Specialist",
    experience: "3",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/24/300/200",
    rating: 4.1,
    expertise: ["Meditation", "Breathing Exercises"],
    sessionMode: {
      online: ["chat", "call", "meeting"],
    },
    fees: "900",
  },
  {
    id: 25,
    name: "Mr. Rajesh Khanna",
    specialization: "Counseling Psychologist",
    experience: "5",
    languages: ["English", "Hindi"],

    image: "https://picsum.photos/seed/25/300/200",
    rating: 4.4,
    expertise: ["Adjustment Issues", "Life Transitions"],
    sessionMode: {
      online: ["call"],
      offline: ["Indore"],
    },
    fees: "1400",
  },
  {
    id: 26,
    name: "Dr. Ayesha Siddiqui",
    specialization: "Clinical Psychologist",
    experience: "9",
    languages: ["English", "Urdu"],

    image: "https://picsum.photos/seed/26/300/200",
    rating: 4.8,
    expertise: ["Dissociative Disorders", "Somatic Symptom Disorders"],
    sessionMode: {
      offline: ["Lucknow"],
    },
    fees: "1900",
  },
];
