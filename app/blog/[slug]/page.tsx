import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/sections/cta-section'
import { Clock, ArrowLeft, Calendar, User } from 'lucide-react'

const articles: Record<string, {
  title: string
  category: string
  readTime: string
  date: string
  intro: string
  sections: { heading: string; content: string }[]
  conclusion: string
  relatedSlugs: string[]
}> = {
  'signs-you-may-need-knee-replacement': {
    title: '5 Signs It Is Time to See an Orthopedic Surgeon for Your Knee Pain',
    category: 'Joint Health',
    readTime: '5 min read',
    date: 'June 2025',
    intro: 'Knee pain is extremely common — but not all knee pain requires surgery, and not all knee pain should be ignored. The problem is knowing when to push through and when to seek help. As an orthopedic surgeon who has treated thousands of patients with knee conditions, I see patients at two extremes: those who come in far too late (after years of unnecessary suffering), and those who come in anxiously for what turns out to be minor inflammation. Here are the five signs that indicate you should book an appointment.',
    sections: [
      {
        heading: '1. Pain that persists beyond 4–6 weeks despite rest and medication',
        content: 'Most acute knee injuries — a minor sprain, a tweak during exercise — settle within a few weeks with rest, ice, and anti-inflammatory medication. If your pain has persisted beyond 4 to 6 weeks without improvement, that is a signal that something structural may be involved — a meniscal tear, cartilage damage, or early arthritis — that will not heal on its own.',
      },
      {
        heading: '2. Pain that wakes you up at night or is present at rest',
        content: 'Mechanical knee pain from arthritis or a meniscal tear typically worsens with activity and improves with rest. If your knee is painful even when you are sitting still or in bed, this points to a more significant degree of joint inflammation or cartilage loss. Nighttime pain is one of the more reliable indicators that arthritis has progressed to a stage where medical evaluation is overdue.',
      },
      {
        heading: '3. Swelling that keeps coming back',
        content: 'A swollen knee after activity — particularly one that repeatedly fills up with fluid — is the joint\'s way of telling you it is under stress. Recurrent effusion (fluid in the joint) is commonly caused by meniscal tears, cartilage damage, or synovial inflammation from arthritis. This is not something to keep draining and ignoring; the underlying cause needs to be addressed.',
      },
      {
        heading: '4. Your knee gives way or locks',
        content: 'If your knee suddenly gives way while walking, climbing stairs, or standing — or if it locks in a bent position and cannot be straightened — this is a red flag. Giving way is typically caused by ligament instability or a loose body in the joint; locking is most commonly caused by a torn meniscal fragment that gets caught in the joint. Both require proper evaluation and are unlikely to resolve without treatment.',
      },
      {
        heading: '5. You have changed how you live because of your knee',
        content: 'This is perhaps the most important sign, and the one most patients underestimate. If you have stopped walking for exercise, avoided social events, given up activities you used to enjoy, or started depending on pain medication daily — your knee is controlling your life. At this point, regardless of what the X-ray shows, the functional impact alone justifies a consultation.',
      },
    ],
    conclusion: 'Early consultation does not mean you will automatically be recommended surgery. In the majority of cases, there are non-surgical options — physiotherapy, injections, activity modification, weight management — that can significantly improve pain and function. Surgery is always a last resort, and the goal of a consultation is to give you the correct diagnosis and a structured treatment plan. If any of the above applies to you, I would encourage you to come in sooner rather than later.',
    relatedSlugs: ['knee-replacement-myths-facts', 'recovery-after-joint-replacement', 'hip-replacement-step-by-step'],
  },

  'knee-replacement-myths-facts': {
    title: 'Knee Replacement: Myths vs. Facts — A Surgeon\'s Perspective',
    category: 'Joint Health',
    readTime: '7 min read',
    date: 'May 2025',
    intro: 'In over a decade of orthopedic practice, I have noticed that the same fears and misconceptions come up again and again before knee replacement surgery. These myths — often passed down through family, neighbours, or outdated online articles — cause patients to delay surgery far longer than necessary, leading to years of avoidable pain. Let me address the most common ones directly.',
    sections: [
      {
        heading: 'Myth 1: "I am too young for a knee replacement"',
        content: 'Fact: Knee replacement is indicated by severity of pain and functional limitation — not age. I routinely perform knee replacements in patients in their 40s and 50s when conservative treatments have failed and quality of life is severely affected. Modern implants are designed to last 20+ years, and younger patients often have excellent outcomes due to better overall health and faster recovery.',
      },
      {
        heading: 'Myth 2: "Recovery takes a year or more"',
        content: 'Fact: Most patients are walking with support within 24 hours of surgery and return to independent walking within 4–6 weeks. By 3 months, the majority are managing stairs comfortably and resuming daily activities. Full recovery — including complete resolution of swelling and return to more demanding activities — takes 6 months, not a year.',
      },
      {
        heading: 'Myth 3: "I will never be able to sit cross-legged or on the floor again"',
        content: 'Fact: While sitting on the floor with a fully flexed knee is difficult after total knee replacement, most patients achieve 110–130 degrees of flexion, which is sufficient for most daily activities including using an Indian-style toilet, light exercise, and many sitting positions. Newer implant designs and rehabilitation techniques have significantly improved range of motion outcomes.',
      },
      {
        heading: 'Myth 4: "The artificial knee will feel unnatural and uncomfortable"',
        content: 'Fact: The vast majority of patients — over 90% in large studies — report that within 6–12 months, the knee feels natural. The initial stiffness and awareness of the implant fades as swelling resolves and the surrounding muscles strengthen. Most patients eventually forget they had surgery.',
      },
      {
        heading: 'Myth 5: "Surgery is the first thing surgeons recommend"',
        content: 'Fact: Knee replacement is always a last resort after conservative measures have failed. Most patients I see have already tried physiotherapy, pain medications, and lifestyle changes before reaching surgery. The decision is made together with the patient based on severity of symptoms, X-ray findings, and impact on daily life.',
      },
    ],
    conclusion: 'Knee replacement, when indicated, is one of the most successful procedures in all of medicine — with high patient satisfaction rates, predictable outcomes, and life-changing results. Do not let myths delay a treatment that could give you back the life you had before the pain started.',
    relatedSlugs: ['signs-you-may-need-knee-replacement', 'hip-replacement-step-by-step', 'runners-knee-vs-meniscus-tear'],
  },

  'understanding-mri-report': {
    title: 'Understanding Your MRI Report: What Orthopedic Terms Actually Mean',
    category: 'Spine Care',
    readTime: '8 min read',
    date: 'May 2025',
    intro: 'You have your MRI report in hand and it is full of terms you have never seen before. You search online and immediately find alarming results. Before you spiral into anxiety, read this guide. I have written it specifically to help you understand what the most common orthopedic MRI findings actually mean — and more importantly, what they do not mean.',
    sections: [
      {
        heading: 'Disc Herniation (also called "Disc Prolapse" or "Slipped Disc")',
        content: 'A disc herniation means that the soft inner material of a spinal disc has pushed outward through a crack in the outer layer. This is extremely common — studies show that over 30% of people without any back pain have disc herniations on MRI. A herniation only becomes a problem when it compresses a nerve and causes symptoms like sciatica (radiating leg pain), numbness, or weakness. An incidental finding of a disc herniation with no symptoms does not require treatment.',
      },
      {
        heading: 'Meniscal Tear',
        content: 'The meniscus is a C-shaped cartilage pad in the knee that acts as a shock absorber. A meniscal tear means this cartilage has cracked or split. Again — extremely common on MRI, and not always symptomatic. Degenerative meniscal tears in people over 45 are so common they are often considered part of normal aging. The question is not "do I have a tear" but "is this tear causing my symptoms" — which requires clinical examination, not just an MRI.',
      },
      {
        heading: 'Chondral Loss / Cartilage Thinning',
        content: 'This refers to wear of the smooth cartilage that covers joint surfaces. It is the pathological finding underlying osteoarthritis. Mild chondral loss is very common in adults over 40. The clinical significance depends on the extent, location, and your symptoms. Grade 1–2 changes may cause mild symptoms manageable with physiotherapy. Grade 3–4 changes (down to bone) are more significant and may eventually require surgical intervention.',
      },
      {
        heading: 'Ligamentous Laxity / Partial Tear',
        content: 'Ligaments connect bones and provide stability. Laxity means looseness; a partial tear means the ligament is injured but not completely ruptured. A complete ACL tear on MRI is significant and requires discussion about surgery. A partial tear or laxity finding may heal with physiotherapy and does not automatically mean surgery.',
      },
      {
        heading: 'Bone Marrow Oedema',
        content: 'This appears as a bright signal within bone on MRI and indicates bone stress or inflammation. It is seen after fractures, in early avascular necrosis, and in inflammatory arthritis. Its significance depends entirely on the clinical context — it may be a minor finding or a sign of something that needs urgent attention.',
      },
    ],
    conclusion: 'An MRI report is a piece of information — not a diagnosis or a treatment plan. The same finding can be completely irrelevant in one patient and the primary cause of symptoms in another. Always have your MRI interpreted in the context of your clinical history and examination by an orthopedic surgeon, not in isolation.',
    relatedSlugs: ['sciatica-vs-back-pain', 'acl-tear-surgery-or-not', 'runners-knee-vs-meniscus-tear'],
  },

  'sciatica-vs-back-pain': {
    title: 'Sciatica vs. Back Pain: How to Tell the Difference',
    category: 'Spine Care',
    readTime: '6 min read',
    date: 'April 2025',
    intro: 'Back pain and sciatica are often confused — and sometimes they occur together — but they are fundamentally different problems with different causes and treatments. Getting the distinction right matters enormously for choosing the correct treatment.',
    sections: [
      {
        heading: 'What is mechanical back pain?',
        content: 'Mechanical back pain originates from the muscles, ligaments, facet joints, or discs of the lower back — without nerve involvement. It is typically felt as a dull ache in the lower back, worsened by certain movements (bending, lifting, prolonged sitting), and relieved by rest or position changes. It does not travel down the leg below the knee, and there is no numbness, tingling, or weakness in the legs. This is the most common type of back pain and the majority of cases resolve with physiotherapy, core strengthening, and activity modification.',
      },
      {
        heading: 'What is sciatica?',
        content: 'Sciatica is pain caused by compression or irritation of the sciatic nerve — the longest nerve in the body, running from the lower spine down through the buttock and leg to the foot. True sciatica causes pain that radiates from the lower back or buttock down the back of the leg, often reaching below the knee and into the foot. It is frequently accompanied by tingling, numbness, or a burning sensation. In severe cases, there may be weakness in the foot or leg. The most common cause is a lumbar disc herniation compressing a nerve root.',
      },
      {
        heading: 'Key differences to look for',
        content: 'The most useful distinguishing feature is whether the pain travels below the knee. Pure mechanical back pain rarely does. If you have shooting, burning, or electric pain down one leg reaching the calf, ankle, or foot — particularly with numbness or tingling — that is sciatica until proven otherwise. Sciatica is also typically worse with sitting and coughing, and may be relieved by walking.',
      },
      {
        heading: 'When does sciatica need surgery?',
        content: 'The vast majority of sciatica — around 80–90% — resolves with conservative management over 6–12 weeks: physiotherapy, anti-inflammatory medication, nerve pain medications, and sometimes an epidural steroid injection. Surgery (typically a microdiscectomy) is indicated when pain is severe and unresponsive to 6 weeks of treatment, when there is significant motor weakness, or in the rare emergency of cauda equina syndrome (loss of bladder/bowel control).',
      },
    ],
    conclusion: 'If you have pain radiating down your leg, particularly with numbness or weakness, please do not self-treat with only painkillers. Get a proper clinical examination and, if indicated, an MRI. The right diagnosis leads to the right treatment — and in most cases, that treatment is not surgery.',
    relatedSlugs: ['understanding-mri-report', 'complex-trauma-first-24-hours', 'rotator-cuff-physio-vs-surgery'],
  },

  'acl-tear-surgery-or-not': {
    title: 'ACL Tear: Do You Always Need Surgery?',
    category: 'Sports Medicine',
    readTime: '6 min read',
    date: 'April 2025',
    intro: 'An ACL (Anterior Cruciate Ligament) tear is one of the most feared injuries for active people. The ACL is the primary stabilising ligament of the knee, and a complete tear means it will not heal on its own. But does that automatically mean surgery? The answer is: not always. The decision depends on several factors that need to be weighed individually.',
    sections: [
      {
        heading: 'Who needs ACL reconstruction?',
        content: 'ACL reconstruction is strongly recommended for young, active individuals who want to return to sports involving cutting, pivoting, or jumping — football, basketball, cricket, badminton, running. It is also recommended when there is associated damage to the meniscus or other ligaments that needs to be addressed. Without reconstruction, repeated episodes of giving way can cause progressive damage to the cartilage and meniscus.',
      },
      {
        heading: 'Who can manage without surgery?',
        content: 'Older patients (50+) with lower activity demands, or those who are willing to modify their activities to avoid high-demand sport, can often manage an ACL-deficient knee with a good physiotherapy programme focused on quadriceps and hamstring strengthening and neuromuscular control. If the knee remains stable with rehabilitation and the patient does not experience giving way, surgery may not be necessary.',
      },
      {
        heading: 'What does ACL reconstruction involve?',
        content: 'ACL reconstruction is an arthroscopic (keyhole) procedure. The torn ACL is replaced with a graft — typically taken from the patient\'s own hamstring tendon or patellar tendon. The surgery itself takes about 60–90 minutes and most patients go home the same day or the next morning. The critical part is the rehabilitation, which takes 6–9 months and must be done properly for the graft to mature and function correctly.',
      },
      {
        heading: 'The criteria-based return to sport',
        content: 'I do not clear patients for full sport based on time alone. Return to sport is based on passing specific strength tests — the reconstructed leg must achieve at least 90% of the strength of the uninjured leg — as well as functional tests and psychological readiness. Returning too early is the primary cause of re-rupture.',
      },
    ],
    conclusion: 'If you have had a confirmed ACL tear, the most important first step is a proper clinical evaluation to understand the full picture — what other structures are injured, what your activity goals are, and what your knee stability is like on examination. From there, we can make the right recommendation for you.',
    relatedSlugs: ['runners-knee-vs-meniscus-tear', 'rotator-cuff-physio-vs-surgery', 'understanding-mri-report'],
  },

  'osteoporosis-women-india': {
    title: 'Osteoporosis in India: Why Women Over 50 Need a Bone Density Check',
    category: 'Arthritis',
    readTime: '5 min read',
    date: 'March 2025',
    intro: 'India has a large and growing burden of osteoporosis — yet awareness remains very low. Most women are diagnosed only after a fracture, often a hip or wrist fracture from a minor fall, by which point significant bone loss has already occurred. This is largely preventable. Here is what every woman over 50 needs to know.',
    sections: [
      {
        heading: 'What is osteoporosis?',
        content: 'Osteoporosis means "porous bones" — a condition in which bone mineral density decreases to the point where bones become fragile and prone to fractures. It is largely silent until a fracture occurs. The most dangerous fractures are hip fractures, which carry a significant risk of complications, loss of independence, and mortality in elderly patients.',
      },
      {
        heading: 'Why are Indian women particularly at risk?',
        content: 'Several factors increase risk in Indian women: low calcium intake due to relatively low dairy consumption, vitamin D deficiency (ironically common even in a sunny country, due to skin coverage and indoor lifestyles), early menopause, small body frame, and low physical activity levels. Combined with genetic predisposition, Indian women often develop osteoporosis a decade earlier than their Western counterparts.',
      },
      {
        heading: 'What is a DEXA scan and what does the T-score mean?',
        content: 'A DEXA (Dual Energy X-ray Absorptiometry) scan is a quick, painless scan that measures bone mineral density, usually at the hip and lumbar spine. The result is expressed as a T-score: above -1 is normal, between -1 and -2.5 is osteopenia (low bone density, pre-osteoporosis), and below -2.5 is osteoporosis. The scan takes about 15 minutes and involves minimal radiation.',
      },
      {
        heading: 'Who should get screened?',
        content: 'All women over 65 should have a baseline DEXA scan. Women aged 50–65 should be screened earlier if they have risk factors including early menopause (before age 45), a family history of osteoporosis or hip fracture, long-term steroid use, low body weight, smoking, or a prior low-impact fracture.',
      },
      {
        heading: 'How is osteoporosis treated?',
        content: 'Treatment combines lifestyle measures (calcium and vitamin D supplementation, weight-bearing exercise, fall prevention) with medications — bisphosphonates are the most commonly used first-line agents. Treatment significantly reduces fracture risk. If you have already had a fragility fracture, the priority is preventing the next one.',
      },
    ],
    conclusion: 'Osteoporosis is a silent disease, but it does not have to be a deadly one. A simple scan, a consultation, and appropriate treatment can dramatically reduce your fracture risk. If you are a woman over 50 and have never had a bone density check, please ask your doctor for a referral.',
    relatedSlugs: ['understanding-mri-report', 'signs-you-may-need-knee-replacement', 'hip-replacement-step-by-step'],
  },

  'hip-replacement-step-by-step': {
    title: 'What Happens During a Hip Replacement — Step by Step',
    category: 'Recovery Tips',
    readTime: '7 min read',
    date: 'March 2025',
    intro: 'One of the most common reasons patients delay hip replacement surgery is anxiety about the unknown — what exactly happens, what will they feel, what will recovery look like? This article walks you through everything from the day before surgery to your first steps, so you know exactly what to expect.',
    sections: [
      {
        heading: 'The day before surgery',
        content: 'You will typically be asked to fast from midnight. A pre-anaesthesia check will have been done in the days prior. Stop any blood-thinning medications as instructed. Get your home ready for recovery — remove trip hazards, arrange a raised toilet seat, ensure your bed is at a comfortable height, and have someone with you for the first few days.',
      },
      {
        heading: 'The surgery itself (about 60–90 minutes)',
        content: 'Hip replacement is performed under spinal anaesthesia (you are awake but numb from the waist down) or general anaesthesia. An incision is made over the hip, the arthritic femoral head is removed, the acetabulum (hip socket) is prepared and fitted with a metal cup and plastic liner, and a metal stem with a ceramic or metal head is inserted into the femur. All components are fixed either with cement or press-fit. The incision is closed and you are taken to recovery.',
      },
      {
        heading: 'Within the first 24 hours',
        content: 'This is the part that surprises most patients: you will be asked to stand and take a few steps with a physiotherapist within 6–12 hours of surgery. Early mobilisation is one of the most important advances in hip replacement care — it reduces the risk of blood clots, pneumonia, and stiffness, and significantly improves outcomes. You will have a drip, a catheter, and a drain initially; most are removed within 24 hours.',
      },
      {
        heading: 'Days 2–5 (hospital stay)',
        content: 'Physiotherapy continues twice daily. You will practise walking with a walker, climbing a few stairs, and sitting in and out of a chair safely. Pain is managed with a combination of oral medications. Most patients are discharged home within 3–5 days once they can walk safely and manage basic activities.',
      },
      {
        heading: 'Recovery at home (weeks 2–12)',
        content: 'Walking distances gradually increase. You will use a walker for 2–4 weeks, then progress to a walking stick. Driving is usually permitted at 6 weeks (left hip) or 8 weeks (right hip). By 3 months, most patients are walking comfortably without aids and have returned to light daily activities. Swelling and mild discomfort can persist up to 6 months.',
      },
    ],
    conclusion: 'Hip replacement is one of the most reliably successful operations in medicine. The vast majority of patients look back and wish they had done it sooner. If you have been putting it off due to fear of the procedure, I hope this article helps. Please feel free to come in and ask any questions — no question is too small.',
    relatedSlugs: ['knee-replacement-myths-facts', 'signs-you-may-need-knee-replacement', 'recovery-after-joint-replacement'],
  },

  'runners-knee-vs-meniscus-tear': {
    title: 'Runner\'s Knee vs. Meniscus Tear: Getting the Diagnosis Right',
    category: 'Sports Medicine',
    readTime: '5 min read',
    date: 'February 2025',
    intro: 'Both conditions cause knee pain in active people and can look similar at first glance. But they are different injuries with different locations, mechanisms, and treatments. Getting the diagnosis right from the start avoids wasted treatment and unnecessary imaging.',
    sections: [
      {
        heading: 'Runner\'s Knee (Patellofemoral Pain Syndrome)',
        content: 'Runner\'s knee is pain originating from the patellofemoral joint — where the kneecap (patella) glides over the front of the femur. It is typically felt as a dull ache at the front of the knee or around the kneecap, worsened by running, stairs, squatting, or prolonged sitting (the "cinema sign"). It is caused by muscle imbalance, training errors, or biomechanical issues — not structural damage. It does not cause locking or giving way.',
      },
      {
        heading: 'Meniscal Tear',
        content: 'A meniscal tear causes pain on the inner or outer side of the knee joint line — not at the front. It is often associated with a specific twisting injury, a clicking or catching sensation, and sometimes swelling. The knee may lock if a torn fragment gets trapped. Squatting and twisting are typically painful. Meniscal tears can occur acutely in young athletes or as degenerative tears in older adults.',
      },
      {
        heading: 'How to tell them apart',
        content: 'Location matters most. Press along the inner and outer edges of the knee joint line — if this reproduces your pain, a meniscal tear is more likely. Pain at the front, behind or around the kneecap, points toward patellofemoral pain. A thorough clinical examination with specific tests (McMurray test for meniscus, Clarke\'s test for patellofemoral) is usually sufficient to distinguish the two. MRI is confirmatory, not diagnostic.',
      },
      {
        heading: 'Treatment differences',
        content: 'Runner\'s knee is treated conservatively: activity modification, physiotherapy focused on VMO and hip strengthening, orthotics, and gradual return to running. Surgery is almost never needed. Meniscal tears in young patients with acute injuries may require arthroscopic repair or resection. Degenerative tears in older patients often respond well to physiotherapy without surgery.',
      },
    ],
    conclusion: 'If you are a runner or active individual with knee pain, resist the urge to immediately get an MRI before seeing a specialist. A proper clinical examination often gives the diagnosis — and can save you the cost and anxiety of imaging that may show coincidental findings.',
    relatedSlugs: ['acl-tear-surgery-or-not', 'understanding-mri-report', 'preventing-sports-injuries'],
  },

  'rotator-cuff-physio-vs-surgery': {
    title: 'Physiotherapy vs. Surgery for Rotator Cuff Tears: Making the Right Choice',
    category: 'Recovery Tips',
    readTime: '6 min read',
    date: 'January 2025',
    intro: 'A rotator cuff tear on an MRI report can feel alarming — but it does not always mean surgery. In fact, the majority of rotator cuff tears, particularly in patients over 50, can be managed successfully with physiotherapy. Understanding when surgery is and is not needed saves unnecessary operations.',
    sections: [
      {
        heading: 'What is the rotator cuff?',
        content: 'The rotator cuff is a group of four muscles and their tendons that surround the shoulder joint, providing stability and enabling lifting and rotation. Tears can be partial (the tendon is damaged but intact) or full-thickness (the tendon is completely torn). They occur acutely from injury or gradually from degeneration.',
      },
      {
        heading: 'When physiotherapy works well',
        content: 'Partial thickness tears, small full-thickness tears, and degenerative tears in patients over 60 often respond very well to a structured physiotherapy programme. The goals are to reduce inflammation, restore range of motion, and strengthen the surrounding muscles to compensate for the torn tendon. Studies show outcomes from physiotherapy are equivalent to surgery for many patient groups, particularly those with lower activity demands.',
      },
      {
        heading: 'When surgery is indicated',
        content: 'Arthroscopic rotator cuff repair is recommended for acute traumatic tears in young, active patients; large or massive tears; tears that have failed 3–6 months of proper physiotherapy; and patients with significant functional limitation affecting their work or sport. The surgery is performed arthroscopically through small incisions and involves reattaching the torn tendon to bone.',
      },
      {
        heading: 'What to expect from recovery after surgery',
        content: 'The arm is kept in a sling for 4–6 weeks. Passive physiotherapy begins early, followed by active exercises from 6–8 weeks. Return to full function takes 4–6 months. The rehabilitation phase is critical — the tendon needs time to biologically heal to bone, and pushing too hard too early risks re-tear.',
      },
    ],
    conclusion: 'My approach is always to try physiotherapy first unless there is a compelling reason for early surgery. Give a proper physiotherapy programme — done consistently for at least 8–12 weeks — a genuine trial before accepting a surgical recommendation. If you would like a second opinion on your shoulder MRI or a conservative management plan, please come in.',
    relatedSlugs: ['acl-tear-surgery-or-not', 'runners-knee-vs-meniscus-tear', 'understanding-mri-report'],
  },

  'complex-trauma-first-24-hours': {
    title: 'Complex Trauma: Why the First 24 Hours After a Fracture Matter Most',
    category: 'Recovery Tips',
    readTime: '6 min read',
    date: 'December 2024',
    intro: 'In complex orthopedic trauma — fractures of the pelvis, hip, femur, or multiple bones from a road traffic accident or a fall from height — the decisions made in the first 24 hours significantly influence not just short-term survival but long-term functional recovery. This article explains the trauma surgeon\'s thinking in those critical early hours.',
    sections: [
      {
        heading: 'Damage Control Orthopaedics',
        content: 'When a patient arrives with multiple injuries, the priority is life over limb. The concept of "damage control orthopaedics" means that in a physiologically unstable patient — one who is in shock, hypothermic, or has severe internal injuries — temporary stabilisation of fractures (using external fixators or traction) is preferred over definitive surgical fixation. This buys time for the patient to be resuscitated and stabilised before undergoing longer, more complex surgery.',
      },
      {
        heading: 'Why early fracture fixation matters',
        content: 'Once the patient is stable, early definitive fixation — ideally within 24–72 hours for most long bone fractures — reduces pain, enables early mobilisation, reduces the risk of fat embolism (fat entering the bloodstream from the fracture site), and significantly reduces complications like pneumonia and pressure sores from prolonged bed rest.',
      },
      {
        heading: 'Pelvic and acetabular fractures',
        content: 'These are among the most complex fractures in orthopedics. The pelvis is a ring structure, and fractures in two places are often unstable. Bleeding from pelvic fractures can be massive and life-threatening. Acetabular fractures involve the hip socket and, if not reduced accurately, lead to post-traumatic arthritis requiring hip replacement years later. My fellowship training at Ganga Hospital, Coimbatore — one of India\'s premier trauma centres — was specifically focused on these complex injuries.',
      },
      {
        heading: 'Rehabilitation starts on Day 1',
        content: 'Even in a complex trauma patient, rehabilitation begins from day one — breathing exercises, foot pumps to prevent clots, and upper limb exercises if the legs are injured. Early physiotherapy is not optional; it is a core part of trauma care. The goal from the first day is to get the patient back to their pre-injury function as completely as possible.',
      },
    ],
    conclusion: 'If someone you care about has sustained a serious fracture — particularly a pelvic, hip, or femoral fracture — it is worth ensuring they are being managed by a surgeon with subspecialty trauma experience. The quality of the initial surgery has a profound impact on long-term outcomes. Do not hesitate to seek a second opinion.',
    relatedSlugs: ['hip-replacement-step-by-step', 'understanding-mri-report', 'signs-you-may-need-knee-replacement'],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  if (!article) return { title: 'Article Not Found' }
  return {
    title: `${article.title} | Dr. Soutrik Mukherjee`,
    description: article.intro.slice(0, 160),
  }
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) notFound()

  const relatedArticles = article.relatedSlugs
    .map((s) => {
      const a = articles[s]
      return a ? { slug: s, title: a.title, category: a.category, readTime: a.readTime } : null
    })
    .filter(Boolean)

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-muted via-background to-muted">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {article.date}
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Dr. Soutrik Mukherjee</p>
              <p className="text-xs text-muted-foreground">MS (Ortho) · AO Masters · Advanced Ortho and Spine Clinic, Kolkata</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            {/* Intro */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 p-6 bg-muted/40 rounded-xl border-l-4 border-primary">
              {article.intro}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {article.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-12 p-6 bg-primary/5 border border-primary/10 rounded-xl">
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">In Summary</h2>
              <p className="text-muted-foreground leading-relaxed">{article.conclusion}</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-muted/40 rounded-2xl text-center">
            <p className="text-lg font-semibold text-foreground mb-2">Have a question about this topic?</p>
            <p className="text-muted-foreground mb-6">
              Book a consultation with Dr. Soutrik Mukherjee at Advanced Ortho and Spine Clinic, Lake Town.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+919874731994"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                +91 98747 31994
              </a>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedArticles.map((related: any) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded mb-3 inline-block">
                      {related.category}
                    </span>
                    <h3 className="font-serif text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                      {related.title}
                    </h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {related.readTime}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
