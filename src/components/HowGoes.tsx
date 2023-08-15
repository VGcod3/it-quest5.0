import { train } from "@/app/fonts"



export default function HGoes() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#0c0f2e] to-[#1d0829]" id='howgoes'>

            <div className="mx-auto max-w-6xl py-44 px-10">
                <h2 className={`${train.className} block-title`}>Як відбувається проект?</h2>

                <div className="">
                    <p className="col-span-1 text-xl font-mono">
                        Цього року IT-quest плануємо провести  <span className="font-bold">26 жовтня</span>.
                        У квесті братиме участь приблизно 4-5 команд по 5-6 чоловік (кількість команд напряму залежить від кількості компаній-партнерів).
                        <br />
                        Команди приходитимуть по черзі з інтервалом ~1 година. Після приходу команди їх зустрічає наш активіст. Потім варто провести ознайомлення учасників з Вашою компанією (ролик, усна розповідь, інтерактивна лекція тощо) загальної тривалості не більше 20 хв. У ній можна розказати загальну інформацію про компанію, розповісти про курси та тренінги чи навіть про відкриті вакансії.
                        <br />
                        Після цього команда приступає до виконання завдання (за його виконанням може слідкувати як наш активіст, так і працівник Вашої компанії).
                        <br />
                        Завдання для всіх команд повинне бути однаковим. Зазвичай його формують самі компанії (інколи з використанням особливостей власного офісу чи освітніх проектів), але ми завжди готові взяти розробку завдання на себе.</p>

                </div>
            </div>
        </div>
    )
}