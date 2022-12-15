({
    doneRendering : function(component, event, helper) {
        if (component.get('v.firstRender')) {
            var element = component.find("radioGroup");
            if (!$A.util.isUndefinedOrNull(element)) {
                element.focus();
                component.set('v.firstRender', false);
            }
        }
    }
})
