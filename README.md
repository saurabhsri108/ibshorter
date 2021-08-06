# IBShorter

This is an url shortener app project build on NEXT.js, Supabase, and Chakra UI

## Thought process

CLIENT -> request to -> URL -> which is an API route to -> ORIGINAL LINK IN DATABASE

Example URL: https://ibshort.xyz/[user_name]/[platform_name]

API ENDPOINTS:

    /api/v1/
            /service/:username/:platform -> FOR REDIRECTION
            check if username exists in users table -> create username as index
            if not, go for dummy retreival.


            /service/create [params -> url of platform, token [for checking if user exists]

            /user/sign-up
            /user/login
            /user/forgot

            /contact

[user_name] => unique entry in database cannot be email characters before @ because 2 different email providers can have
clashing names before @ or it will be crypto random url

Therefore,

Sign Up Form -> Username [must]
-> Email/Phone/Google/whatever -> No remember me because JWT Auth

TABLES:

users id [p], username[u], email[u], password, name, profile_picture, created_at, updated_at

urls id[p], [user_id[f], platform][c], redirect, created_at, updated_at

dummy -> 30 days storage period for every record id[p], [dummy_user[u], platform][c], redirect, created_at, updated_at

## Tasks

UI Tasks

- [ ] Landing page
- [ ] CLIENT SIGN UP & LOGIN -> for named url shortener links
- [ ] Menu chakra ui after login for username -> Dashboard, mylinks, settings
- [ ] Avatar chakra ui
- [ ] drawers for small screen -> left side with menu
- [ ] alert boxes chakra ui for user actions -> delete created url
- [ ] accordian for faqs in the home screen
- [ ] ScaleFade transition for tasks in-progress/done alert
