To use this
===========

1. Enable the extension here: chrome://extensions/
2. Go to https://developer.chrome.com/extensions/tut_debugging
3. Click the chrome extension button, then click the color button.
The color of the page background should change and the API should be hit at the endpoint
to get external images (proving it works). Chrome will not show the alerts correctly or
or show the network request, but you will see the request in the API logs.

Remaining Work
==============

Plan
____

Should be 2 buttons:
  - Quick Add
  - Custom Add

TWO NEW POST ROUTES in the API for these requests:
  - `/quick` should take the URL of the site & populate the new listing, sending back True/False on success.
  - `/custom` should take in the provided values, defaulting any not provided

Quick just has the server do all of the work, sending only the following information:
  - User identifier
  - URL of the site
From that info, the first 10 pictures will be chosen, and a price will be set as TBD (unless one can be scraped via regex matching on double floating point numbers - for the currencies that apply), and the title will be set to the page title

Custom will allow inputs for the user to provide info on:
  - Title
  - Photos (load these in the UI... maybe with checkboxes?)
  - Price
From that, the rest will be defaulted

