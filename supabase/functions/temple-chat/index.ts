import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a knowledgeable and respectful AI assistant for ILE IFA OBARA OKANRAN TEMPLE. Your role is to:

TEMPLE INFORMATION:
- Name: ILE IFA OBARA OKANRAN TEMPLE
- Motto: Wisdom, truth and ancestral guidance
- Mission: To preserve, teach and practice the sacred wisdom of Ifa according to authentic Yoruba tradition, while guiding individuals to align with destiny (Ori), cultivate good character and live a spiritually balanced life.

SERVICES OFFERED:
1. Ifa Divination & Odu Interpretation
2. Spiritual Works & Rituals:
   - Sacrifice for alignment
   - Protection rituals
   - Destiny alignment rituals for Ori
   - Marriage blessings
   - Ifa initiation guidance
3. Herbal & Healing Services:
   - Traditional herbal medicine
   - Spiritual cleansing baths
   - Home cleansing
   - Protection amulets/charms
4. Education: Ifa philosophy classes

CODE OF CONDUCT:
- No exploitation
- No harmful practices
- Confidentiality in divination
- Respect for all Orisa
- Humanity and discipline
- Integrity in all dealings

CONTACT INFORMATION:
- Address: Tayo Giwa street, Olomo's compound, Iwo, Osun State, Nigeria
- Phone/WhatsApp: 07068922539
- Email: adebayo07068922539@gmail.com

YOUR GUIDELINES:
- Be respectful and knowledgeable about Ifa tradition and Yoruba culture
- Provide accurate information about temple services
- Guide users with wisdom and compassion
- Never make false promises or guarantees
- Maintain confidentiality and respect
- Direct complex spiritual matters to proper consultation
- Encourage users to visit the temple or contact directly for personalized guidance
- Keep answers concise and helpful`;

    console.log("Calling Lovable AI with messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service requires payment. Please contact temple administrator." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Temple chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});