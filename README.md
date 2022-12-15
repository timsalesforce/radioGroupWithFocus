# Focusing on a radioGroup after rendering causes weirdness

In this repro, the weirdness is not as pronounced as in the Health Cloud Repro (W-W-12108089).  For the health cloud customer, the repro includes the input buttons not being clickable (unless you click in the very top portion of the input).

## Repro

- Clone this repo and deploy to a scratch org
- Create an Account
- On the Account Record Page, click on the "FocusedRadio" quick action button
- Observe the radio group rendered in the modal
- Click anywhere, but not on a radio button
- See that the error message is shown for a short time, even though the radio button is selected

In the health cloud org, which doesn't use quick actions, but a home-grown slds-modal solution, even clicking on the input button while the radio group was in focus did not register the change.  You had to click very close to the top of the radio button, or wait until the message appeared, and then select the radio button.

I discovered that the reason for the button not getting selected is because the health cloud UI shifts upward to display the required message for the radio group.  And when that happens the actualTarget is not computed correctly.  

I don't think that the radioGroup compnent expects to be focused on programmatically, and the behavior seen here is not desirable.