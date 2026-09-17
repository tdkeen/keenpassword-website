# KeenPassword Vault Website

Official website for KeenPassword Vault, a privacy-focused password manager for Windows.

## WEBSITE

The website is a static HTML/CSS site with no server-side application or database.

The site includes:

* Product overview and feature information
* Screenshots
* Frequently asked questions
* Privacy policy
* Contact and support form
* Contact confirmation page
* Microsoft Store link
* Localized versions in multiple languages

## LANGUAGES

The website is available in:

* English
* German
* Spanish
* French
* Italian
* Dutch
* Polish
* Portuguese (Brazil)
* Portuguese (Portugal)

## STRUCTURE

index.html                 Main English webpage
contact.html               English contact and support page
contact-thank-you.html     English contact confirmation page
privacy_policy.html        English privacy policy
style.css                  Website styling
images/                    Logo, favicon, and screenshots

Language-specific pages are contained in their respective subdirectories:

de/                        German
es/                        Spanish
fr/                        French
it/                        Italian
nl/                        Dutch
pl/                        Polish
pt-br/                     Portuguese (Brazil)
pt-pt/                     Portuguese (Portugal)

Each localized directory contains its own translated pages and uses the shared
images and stylesheet from the parent directory.

## CONTACT FORM

The contact form uses Web3Forms to process support messages.

Successful submissions are handled by JavaScript and redirected to the
appropriate language-specific contact confirmation page.

The form is available on each localized version of the website.

## HOSTING

The website consists of static HTML and CSS and can be hosted using a static
web hosting service.

## DEVELOPMENT

The site can be tested locally using VS Code with Live Server or by opening
the HTML files directly in a browser.

## IMPORTANT

Keep the website's security, privacy, and feature descriptions consistent with
the functionality of the released KeenPassword Vault application.

Microsoft Store links should point to the official KeenPassword Vault listing.
