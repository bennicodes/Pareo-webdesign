export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

export function sendContactEmail = async (FormData)=>{
    return await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
            name: FormData.name,
            email: FormData.email,
            phone: FormData.phone,
            message: FormData.message
        },
        EMAILJS_API_KEY
    )
}
