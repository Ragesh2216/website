import React, { useState } from "react";

export default function Contact() {
  return(
   
  
    <div>
     <main class="wrap">
    <header>
      <h1>Get in Touch</h1>
      <p>Fill this form and we’ll get back within one business day.</p>
    </header>

    <section class="card">
      <form action="/thank-you" method="post" novalidate>
        <div class="grid">
          <div class="field">
            <label for="full_name">Full name</label>
            <input id="full_name" name="full_name" type="text" placeholder="Ada Lovelace"
                   autocomplete="name" required />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="ada@example.com"
                   autocomplete="email" inputmode="email" required />
          </div>

          <div class="field">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                   autocomplete="tel" inputmode="tel"
                   pattern="^[+()\- \d]{7,}$"
                   title="Enter a valid phone number" />
            <div class="hint">Use country code if outside India.</div>
          </div>

          <div class="field">
            <label for="role">I am a…</label>
            <select id="role" name="role" required>
              <option value="" disabled selected>Select one</option>
              <option>Student</option>
              <option>Professional</option>
              <option>Founder</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <fieldset>
          <legend class="sr-only">Project type</legend>
          <label>Project type</label>
          <div class="choices" role="group" aria-label="Project type">
            <label><input type="radio" name="ptype" value="website" required /> Website</label>
            <label><input type="radio" name="ptype" value="app" /> Mobile App</label>
            <label><input type="radio" name="ptype" value="brand" /> Branding</label>
          </div>
        </fieldset>

        <fieldset>
          <legend class="sr-only">Extras</legend>
          <label>Extras</label>
          <div class="choices" role="group" aria-label="Extras">
            <label><input type="checkbox" name="extras_seo" /> SEO</label>
            <label><input type="checkbox" name="extras_copy" /> Copywriting</label>
            <label><input type="checkbox" name="extras_host" /> Hosting</label>
          </div>
        </fieldset>

        <div class="field">
          <label for="budget">Estimated budget</label>
          <select id="budget" name="budget" autocomplete="off" required>
            <option value="" disabled selected>Select a range</option>
            <option value="under50k">Under ₹50,000</option>
            <option value="50-200k">₹50,000 – ₹200,000</option>
            <option value="200-500k">₹200,000 – ₹500,000</option>
            <option value="500k+">₹500,000+</option>
          </select>
        </div>

        <div class="field">
          <label for="message">Tell us about your project</label>
          <textarea id="message" name="message" placeholder="What are you building and when do you want to launch?" required></textarea>
        </div>

        <div class="field">
          <label for="brief">Attach a brief (optional)</label>
          <input id="brief" name="brief" type="file" accept=".pdf,.doc,.docx,.txt" />
          <div class="hint">Max 10MB. PDF preferred.</div>
        </div>

        <div class="actions">
          <button type="submit">Submit</button>
          <button type="reset" class="secondary">Reset</button>
          <span class="hint">By submitting, you agree to our <a href="#">terms</a>.</span>
        </div>
      </form>
      <p class="footer-note">We respect your privacy. We’ll never share your data.</p>
      
    </section>
  </main></div>
  );
}
