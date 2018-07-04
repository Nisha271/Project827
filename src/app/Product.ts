
export class Product {
    constructor(
     public IdOrganization : number,    
     public OrgTypeId : number, 
     public AddrId : number, 
     public FirstOwnerPersonId : number, 
     public SecondOwnerPersonId : number, 
     public ParentId : number, 
     public FirmName : string, 
     public LastAllocQty : number, 
     public LastRateBand : number, 
     public CompetitorUpdatesTO : string, 
     public OrgTypeE : number, 
     public DeclaredRate : number, 
     public BalanceQuota : number, 
     public ValidUpto : number, 
     public QuotaDeclarationId : number, 
     public UpdatedBy : number, 
     public UpdatedOn : string, 
     public AddressList : string,
     public PersonList : string, 
     public FirstOwnerName : string, 
     public SecondOwnerName : string, 
     public PhoneNo : string,
     public FaxNo : string,
     public EmailAddr : string,
     public Website : string,
     public RegisteredMobileNos : string,
     public CdStructureId : number,
     public CdStructure : number,
     public IsActive : number,
     public Remark : string,
     public DelPeriodId : number,
     public DeliveryPeriod : number,
     public OrgLicenseDtlTOList : string,
     public VillageName : string,
     public IsSpecialCnf : number,
     public CnfDealersTOList : string,
     public CompetitorExtTOList : string,
     public DigitalSign : string,
     public DeactivatedOn : string,
     public DistrictId : number,
     public OrgLogo : string,
     public InvoiceOtherDetailsTOList : string,
     public InvoiceBankDetailsTOList : string,
     public PurchaseCompetitorExtTOList : string,
     public FirmTypeId : number,
     public InfluencerTypeId : number,
     public DateOfEstablishment : string
    
    ){
 
    }
 }