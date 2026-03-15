# Calendly Setup Guide for Dream Browz n Beauty Studio

## Overview
This guide will help you set up Calendly to handle appointment scheduling for your website. Calendly is a free scheduling tool that integrates with the new `booking.html` page.

---

## Step 1: Create a Calendly Account

1. Go to **[calendly.com](https://calendly.com)**
2. Click **"Sign Up Free"** (upper right)
3. Enter your email and create a password
4. Complete the setup wizard:
   - **Name**: Your name or "Dream Browz & Beauty Studio"
   - **Email**: Your studio email
   - **Time Zone**: Select your local time zone
   - **Availability**: Set your default working hours

---

## Step 2: Configure Your Availability

1. In the Calendly dashboard, go to **Settings** (gear icon)
2. Click **Availability**
3. Set your business hours:
   - **Monday - Wednesday**: 10:00 AM - 6:00 PM
   - **Thursday - Friday**: 10:00 AM - 7:00 PM
   - **Saturday**: 10:00 AM - 6:00 PM
   - **Sunday**: Off (disabled)
4. Add any additional blocked time (lunch, breaks, closing dates)
5. Click **Save**

---

## Step 3: Create Service-Based Calendars

Calendly allows you to create multiple event types. Set up one for each service:

### Brows Appointment
1. Click **+ New Event Type** (or **Event Types**)
2. **Event Name**: "Brows"
3. **Description**: "Brow shaping, threading, tinting, or microblading consultation"
4. **Duration**: 30 minutes
5. **Buffer Time**: 15 minutes (buffer after appointment for prep)
6. **Capacity**: 1 person
7. **Scheduling Link**: Will auto-generate (copy for reference)
8. Click **Create**

### Waxing Appointment
1. Repeat steps 1-7 with:
   - **Event Name**: "Waxing"
   - **Description**: "Professional facial, body, or specialized waxing services"
   - **Duration**: 45 minutes
   - **Buffer Time**: 15 minutes

### Facials Appointment
1. Repeat steps 1-7 with:
   - **Event Name**: "Facials"
   - **Description**: "Deep cleansing, skincare treatments, or luxury facial packages"
   - **Duration**: 60 minutes
   - **Buffer Time**: 15 minutes

### Lash Lifting Appointment
1. Repeat steps 1-7 with:
   - **Event Name**: "Lash Lifting"
   - **Description**: "Professional lash lifting, perming, or lash lift & tint combo"
   - **Duration**: 45 minutes
   - **Buffer Time**: 15 minutes

### Tinting Appointment
1. Repeat steps 1-7 with:
   - **Event Name**: "Tinting"
   - **Description**: "Brow tinting, lash tinting, or combination services"
   - **Duration**: 30 minutes
   - **Buffer Time**: 15 minutes

---

## Step 4: Configure Appointment Questions

For each event type, you'll want to collect customer information:

1. Select an event type (e.g., "Brows")
2. Click **Edit**
3. Scroll to **Questions** section
4. Enable automatic questions:
   - ✅ **Name** (Required)
   - ✅ **Email** (Required)
   - ✅ **Phone Number** (Optional - add if you want SMS reminders)
5. Add custom questions if desired:
   - "Is this your first visit?" (Yes/No)
   - "Any skin concerns or allergies?" (Text)
6. Click **Save**

Repeat for all 5 event types.

---

## Step 5: Enable Email Confirmations

1. Go to **Settings** → **Email Notifications**
2. Ensure **"Send me a notification for each new invite"** is enabled
3. Ensure **"Send invitees a confirmation email"** is enabled
4. Under **Email Design**, customize the confirmation message (optional):
   - Add studio phone number
   - Add studio address
   - Include any pre-appointment instructions
5. Click **Save**

---

## Step 6: Get Your Embed Code

### Option A: Single Calendar (All Services)
This embeds one calendar that shows all service types.

1. Go to **Event Types**
2. At the top, you'll see your main calendar link
   - Format: `https://calendly.com/yourusername`
3. Copy this link for the next step

### Option B: Service-Specific Calendars
To separate booking by service, create sub-pages:

1. Each event type you created has its own scheduling link
2. Format: `https://calendly.com/yourusername/brows`
3. You can create separate pages for each service

### Option C: Calendar URL (Recommended)
1. Click your **Profile** (top-right)
2. Copy your **Calendly URL**
   - Example: `https://calendly.com/dreambrowznbeauty`

---

## Step 7: Embed Calendly on booking.html

### If you want a simple embedded calendar:

1. Open `booking.html` in your editor
2. Find the section with:
   ```html
   <!-- START: REPLACE WITH YOUR CALENDLY EMBED -->
   <!-- 
   <div class="calendly-inline-widget" data-url="https://calendly.com/yourusername" ...
   -->
   <!-- END: CALENDLY EMBED -->
   ```

3. **Uncomment** the lines by removing `<!-- ` and ` -->`
4. **Replace** `https://calendly.com/yourusername` with your actual Calendly URL
   - Example: `https://calendly.com/dreambrowznbeauty`

5. Your final code should look like:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/dreambrowznbeauty" style="min-width:320px; height:600px;"></div>
   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
   ```

6. **Save** the file

### If you prefer a button redirect:

Instead of embedding, you can use a button that opens Calendly:

```html
<a href="https://calendly.com/dreambrowznbeauty" class="btn btn-primary" target="_blank">
  Open Calendly Scheduling
</a>
```

---

## Step 8: Test Your Setup

1. Open your website locally or on GitHub Pages
2. Navigate to the **Book Now** page (`booking.html`)
3. Verify the Calendly widget appears
4. Try booking a test appointment:
   - Select a service
   - Choose a time slot
   - Enter your name and email
   - Complete the booking
5. Check that you received a confirmation email
6. Log into Calendly and verify the appointment appears on your calendar

---

## Step 9: Optional - Enable SMS Notifications

**For Free SMS Notifications via Zapier + Twilio:**

If you want SMS reminders sent to you when customers book:

### Setup Twilio (Free Tier)
1. Go to **[twilio.com](https://www.twilio.com)**
2. Sign up for a free account
3. Get a phone number (you'll receive an SMS about it)
4. Note your **Account SID** and **Auth Token** (save these securely)

### Setup Zapier Workflow
1. Go to **[zapier.com](https://zapier.com)** and sign up (free tier available)
2. Click **+ Create Zap**
3. **Trigger App**: Search for **"Calendly"**
   - Select **"New Event Scheduled"**
   - Connect your Calendly account
   - Select which event types to monitor (or "all")
4. **Action App**: Search for **"SMS by Twilio"**
   - Connect your Twilio account
   - **To Phone Number**: Your phone number (in format: +1234567890)
   - **SMS Body**: Customize the message:
     ```
     New booking from {{first_name}} {{last_name}} for {{event_name}}
     Time: {{start_time}}
     Phone: {{additional_fields.phone}}
     ```
5. Click **Test & Publish**

That's it! Now you'll get SMS notifications whenever someone books.

---

## Ongoing Management

### How to View Booked Appointments
1. Log into Calendly
2. Click **Calendar** to see all bookings
3. Click on an appointment to view details and edit

### How to Block Time Off
1. In the Calendly calendar view
2. Click the **+ Create** button
3. Select **"Block My Time"**
4. Set the duration and reason
5. Save

### How to Adjust Hours
1. Go to **Settings** → **Availability**
2. Update your calendar hours
3. Save changes

### How to Create a Link for a Specific Service
Send customers a direct link to book a specific service:
- Example: `https://calendly.com/dreambrowznbeauty/brows`

---

## Customization Tips

### Add a Custom Intro Message
1. Event Type → **Edit**
2. **Description** field - add welcoming text
   - Example: *"Welcome! I'm looking forward to enhancing your beauty. This appointment includes a free consultation."*

### Set availability by service
1. Create different Calendly accounts or calendars for different services if you want different availability per service

### Add Payment Processing (Paid Feature)
Calendly Premium ($10-16/month) includes:
- Payment processing (Stripe, PayPal)
- Video conferencing
- More customization
- Advanced integrations

---

## Troubleshooting

### "The widget isn't showing on my website"
- Verify your Calendly URL is correct (check spelling)
- Make sure the HTML is properly uncommented
- Try refreshing the page (clear cache)
- Check browser console for errors (F12)

### "Customers aren't receiving confirmation emails"
- In Calendly, go to **Settings** → **Email Notifications**
- Verify **"Send invitees a confirmation email"** is enabled
- Check spam/promotions folder

### "Calendly shows no availability"
- Go to **Settings** → **Availability**
- Verify business hours are set
- Check that you haven't blocked out the entire day
- Make sure time zone matches your location

### "I want different availability for different services"
Advanced option: Create separate Calendly accounts (one per service)
- Give each account its own URL
- Update `booking.html` to link to specific service URLs

---

## Next Steps

1. ✅ Create Calendly account
2. ✅ Set up your 5 service calendars
3. ✅ Configure availability and appointment questions
4. ✅ Get your Calendly embed URL
5. ✅ Paste the embed code into `booking.html`
6. ✅ Test a sample booking
7. ✅ (Optional) Set up SMS notifications via Zapier
8. ✅ Deploy changes to your website

---

## Need Help?

- **Calendly Help**: https://help.calendly.com
- **Zapier Help**: https://help.zapier.com
- **Twilio Help**: https://www.twilio.com/docs

---

**Last Updated**: March 13, 2026  
Dream Browz & Beauty Studio Appointment Scheduling System
