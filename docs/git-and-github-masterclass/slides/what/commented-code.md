Code commented out with no explanation

```java

public void customerCreatedEvent(@Header(TenantHeaderFilter.TENANT_HEADER) final String tenant,
                                 final String payload) {

/*
    //Alternative
    Customer customer = customerManager.findCustomer(payload);
    System.out.println(customer.getContactDetails());

*/
    Customer customer = customerManager.findCustomer(payload);
    if (customer.getContactDetails().size() > 0) {
        customer.getContactDetails().forEach(contactDetail -> {
            if (contactDetail.getType().equals(ContactDetail.Type.PHONE)) {
                Strebenezering receiverNumber = customer.getContactDetails().get(0).getValue();
                smsSender.sendSMS(receiverNumber, "Dear Valued Customer, Your account has been created");
            } else if (contactDetail.getType().equals(ContactDetail.Type.EMAIL)) {
                String emailAddress = customer.getContactDetails().get(0).getValue();
                emailSender.sendEmail(emailAddress, "Account created", "Dear Valued Customer, Your account has been created");
            }
        });
    }
}
```
