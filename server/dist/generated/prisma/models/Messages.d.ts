import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Messages
 *
 */
export type MessagesModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagesPayload>;
export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
export type MessagesMinAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    read: boolean | null;
    createdAt: Date | null;
    directChatId: string | null;
    groupId: string | null;
    content: string | null;
    fileUrl: string | null;
    voiceMessage: string | null;
    seen: boolean | null;
    messageId: string | null;
};
export type MessagesMaxAggregateOutputType = {
    id: string | null;
    senderId: string | null;
    read: boolean | null;
    createdAt: Date | null;
    directChatId: string | null;
    groupId: string | null;
    content: string | null;
    fileUrl: string | null;
    voiceMessage: string | null;
    seen: boolean | null;
    messageId: string | null;
};
export type MessagesCountAggregateOutputType = {
    id: number;
    senderId: number;
    read: number;
    createdAt: number;
    directChatId: number;
    groupId: number;
    content: number;
    fileUrl: number;
    voiceMessage: number;
    seen: number;
    messageId: number;
    _all: number;
};
export type MessagesMinAggregateInputType = {
    id?: true;
    senderId?: true;
    read?: true;
    createdAt?: true;
    directChatId?: true;
    groupId?: true;
    content?: true;
    fileUrl?: true;
    voiceMessage?: true;
    seen?: true;
    messageId?: true;
};
export type MessagesMaxAggregateInputType = {
    id?: true;
    senderId?: true;
    read?: true;
    createdAt?: true;
    directChatId?: true;
    groupId?: true;
    content?: true;
    fileUrl?: true;
    voiceMessage?: true;
    seen?: true;
    messageId?: true;
};
export type MessagesCountAggregateInputType = {
    id?: true;
    senderId?: true;
    read?: true;
    createdAt?: true;
    directChatId?: true;
    groupId?: true;
    content?: true;
    fileUrl?: true;
    voiceMessage?: true;
    seen?: true;
    messageId?: true;
    _all?: true;
};
export type MessagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MessagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType;
};
export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
    [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessages[P]> : Prisma.GetScalarType<T[P], AggregateMessages[P]>;
};
export type MessagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithAggregationInput | Prisma.MessagesOrderByWithAggregationInput[];
    by: Prisma.MessagesScalarFieldEnum[] | Prisma.MessagesScalarFieldEnum;
    having?: Prisma.MessagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessagesCountAggregateInputType | true;
    _min?: MessagesMinAggregateInputType;
    _max?: MessagesMaxAggregateInputType;
};
export type MessagesGroupByOutputType = {
    id: string;
    senderId: string;
    read: boolean;
    createdAt: Date;
    directChatId: string | null;
    groupId: string | null;
    content: string | null;
    fileUrl: string | null;
    voiceMessage: string | null;
    seen: boolean;
    messageId: string | null;
    _count: MessagesCountAggregateOutputType | null;
    _min: MessagesMinAggregateOutputType | null;
    _max: MessagesMaxAggregateOutputType | null;
};
type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessagesGroupByOutputType[P]>;
}>>;
export type MessagesWhereInput = {
    AND?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    OR?: Prisma.MessagesWhereInput[];
    NOT?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    id?: Prisma.StringFilter<"Messages"> | string;
    senderId?: Prisma.StringFilter<"Messages"> | string;
    read?: Prisma.BoolFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Messages"> | Date | string;
    directChatId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    groupId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    content?: Prisma.StringNullableFilter<"Messages"> | string | null;
    fileUrl?: Prisma.StringNullableFilter<"Messages"> | string | null;
    voiceMessage?: Prisma.StringNullableFilter<"Messages"> | string | null;
    seen?: Prisma.BoolFilter<"Messages"> | boolean;
    messageId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    directChat?: Prisma.XOR<Prisma.DirectChatNullableScalarRelationFilter, Prisma.DirectChatWhereInput> | null;
    groupChat?: Prisma.XOR<Prisma.GroupChatNullableScalarRelationFilter, Prisma.GroupChatWhereInput> | null;
    message?: Prisma.XOR<Prisma.MessagesNullableScalarRelationFilter, Prisma.MessagesWhereInput> | null;
    replies?: Prisma.MessagesListRelationFilter;
};
export type MessagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    read?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    directChatId?: Prisma.SortOrderInput | Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    voiceMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    messageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sender?: Prisma.UserOrderByWithRelationInput;
    directChat?: Prisma.DirectChatOrderByWithRelationInput;
    groupChat?: Prisma.GroupChatOrderByWithRelationInput;
    message?: Prisma.MessagesOrderByWithRelationInput;
    replies?: Prisma.MessagesOrderByRelationAggregateInput;
};
export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    OR?: Prisma.MessagesWhereInput[];
    NOT?: Prisma.MessagesWhereInput | Prisma.MessagesWhereInput[];
    senderId?: Prisma.StringFilter<"Messages"> | string;
    read?: Prisma.BoolFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Messages"> | Date | string;
    directChatId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    groupId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    content?: Prisma.StringNullableFilter<"Messages"> | string | null;
    fileUrl?: Prisma.StringNullableFilter<"Messages"> | string | null;
    voiceMessage?: Prisma.StringNullableFilter<"Messages"> | string | null;
    seen?: Prisma.BoolFilter<"Messages"> | boolean;
    messageId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    sender?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    directChat?: Prisma.XOR<Prisma.DirectChatNullableScalarRelationFilter, Prisma.DirectChatWhereInput> | null;
    groupChat?: Prisma.XOR<Prisma.GroupChatNullableScalarRelationFilter, Prisma.GroupChatWhereInput> | null;
    message?: Prisma.XOR<Prisma.MessagesNullableScalarRelationFilter, Prisma.MessagesWhereInput> | null;
    replies?: Prisma.MessagesListRelationFilter;
}, "id">;
export type MessagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    read?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    directChatId?: Prisma.SortOrderInput | Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    content?: Prisma.SortOrderInput | Prisma.SortOrder;
    fileUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    voiceMessage?: Prisma.SortOrderInput | Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    messageId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MessagesCountOrderByAggregateInput;
    _max?: Prisma.MessagesMaxOrderByAggregateInput;
    _min?: Prisma.MessagesMinOrderByAggregateInput;
};
export type MessagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessagesScalarWhereWithAggregatesInput | Prisma.MessagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessagesScalarWhereWithAggregatesInput | Prisma.MessagesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Messages"> | string;
    senderId?: Prisma.StringWithAggregatesFilter<"Messages"> | string;
    read?: Prisma.BoolWithAggregatesFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Messages"> | Date | string;
    directChatId?: Prisma.StringNullableWithAggregatesFilter<"Messages"> | string | null;
    groupId?: Prisma.StringNullableWithAggregatesFilter<"Messages"> | string | null;
    content?: Prisma.StringNullableWithAggregatesFilter<"Messages"> | string | null;
    fileUrl?: Prisma.StringNullableWithAggregatesFilter<"Messages"> | string | null;
    voiceMessage?: Prisma.StringNullableWithAggregatesFilter<"Messages"> | string | null;
    seen?: Prisma.BoolWithAggregatesFilter<"Messages"> | boolean;
    messageId?: Prisma.StringNullableWithAggregatesFilter<"Messages"> | string | null;
};
export type MessagesCreateInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    sender: Prisma.UserCreateNestedOneWithoutMessagesInput;
    directChat?: Prisma.DirectChatCreateNestedOneWithoutMessagesInput;
    groupChat?: Prisma.GroupChatCreateNestedOneWithoutMessagesInput;
    message?: Prisma.MessagesCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.MessagesCreateNestedManyWithoutMessageInput;
};
export type MessagesUncheckedCreateInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
    replies?: Prisma.MessagesUncheckedCreateNestedManyWithoutMessageInput;
};
export type MessagesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sender?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    directChat?: Prisma.DirectChatUpdateOneWithoutMessagesNestedInput;
    groupChat?: Prisma.GroupChatUpdateOneWithoutMessagesNestedInput;
    message?: Prisma.MessagesUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.MessagesUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replies?: Prisma.MessagesUncheckedUpdateManyWithoutMessageNestedInput;
};
export type MessagesCreateManyInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
};
export type MessagesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MessagesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessagesListRelationFilter = {
    every?: Prisma.MessagesWhereInput;
    some?: Prisma.MessagesWhereInput;
    none?: Prisma.MessagesWhereInput;
};
export type MessagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessagesNullableScalarRelationFilter = {
    is?: Prisma.MessagesWhereInput | null;
    isNot?: Prisma.MessagesWhereInput | null;
};
export type MessagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    read?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    directChatId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    voiceMessage?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
};
export type MessagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    read?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    directChatId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    voiceMessage?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
};
export type MessagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    read?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    directChatId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    fileUrl?: Prisma.SortOrder;
    voiceMessage?: Prisma.SortOrder;
    seen?: Prisma.SortOrder;
    messageId?: Prisma.SortOrder;
};
export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutSenderInput | Prisma.MessagesUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput> | Prisma.MessagesCreateWithoutSenderInput[] | Prisma.MessagesUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutSenderInput | Prisma.MessagesCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessagesCreateManySenderInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessagesUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutSenderInput | Prisma.MessagesUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesCreateNestedManyWithoutDirectChatInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutDirectChatInput, Prisma.MessagesUncheckedCreateWithoutDirectChatInput> | Prisma.MessagesCreateWithoutDirectChatInput[] | Prisma.MessagesUncheckedCreateWithoutDirectChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutDirectChatInput | Prisma.MessagesCreateOrConnectWithoutDirectChatInput[];
    createMany?: Prisma.MessagesCreateManyDirectChatInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUncheckedCreateNestedManyWithoutDirectChatInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutDirectChatInput, Prisma.MessagesUncheckedCreateWithoutDirectChatInput> | Prisma.MessagesCreateWithoutDirectChatInput[] | Prisma.MessagesUncheckedCreateWithoutDirectChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutDirectChatInput | Prisma.MessagesCreateOrConnectWithoutDirectChatInput[];
    createMany?: Prisma.MessagesCreateManyDirectChatInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUpdateManyWithoutDirectChatNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutDirectChatInput, Prisma.MessagesUncheckedCreateWithoutDirectChatInput> | Prisma.MessagesCreateWithoutDirectChatInput[] | Prisma.MessagesUncheckedCreateWithoutDirectChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutDirectChatInput | Prisma.MessagesCreateOrConnectWithoutDirectChatInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutDirectChatInput | Prisma.MessagesUpsertWithWhereUniqueWithoutDirectChatInput[];
    createMany?: Prisma.MessagesCreateManyDirectChatInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutDirectChatInput | Prisma.MessagesUpdateWithWhereUniqueWithoutDirectChatInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutDirectChatInput | Prisma.MessagesUpdateManyWithWhereWithoutDirectChatInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUncheckedUpdateManyWithoutDirectChatNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutDirectChatInput, Prisma.MessagesUncheckedCreateWithoutDirectChatInput> | Prisma.MessagesCreateWithoutDirectChatInput[] | Prisma.MessagesUncheckedCreateWithoutDirectChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutDirectChatInput | Prisma.MessagesCreateOrConnectWithoutDirectChatInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutDirectChatInput | Prisma.MessagesUpsertWithWhereUniqueWithoutDirectChatInput[];
    createMany?: Prisma.MessagesCreateManyDirectChatInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutDirectChatInput | Prisma.MessagesUpdateWithWhereUniqueWithoutDirectChatInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutDirectChatInput | Prisma.MessagesUpdateManyWithWhereWithoutDirectChatInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesCreateNestedOneWithoutRepliesInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutRepliesInput, Prisma.MessagesUncheckedCreateWithoutRepliesInput>;
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutRepliesInput;
    connect?: Prisma.MessagesWhereUniqueInput;
};
export type MessagesCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutMessageInput, Prisma.MessagesUncheckedCreateWithoutMessageInput> | Prisma.MessagesCreateWithoutMessageInput[] | Prisma.MessagesUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutMessageInput | Prisma.MessagesCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.MessagesCreateManyMessageInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUncheckedCreateNestedManyWithoutMessageInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutMessageInput, Prisma.MessagesUncheckedCreateWithoutMessageInput> | Prisma.MessagesCreateWithoutMessageInput[] | Prisma.MessagesUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutMessageInput | Prisma.MessagesCreateOrConnectWithoutMessageInput[];
    createMany?: Prisma.MessagesCreateManyMessageInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUpdateOneWithoutRepliesNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutRepliesInput, Prisma.MessagesUncheckedCreateWithoutRepliesInput>;
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutRepliesInput;
    upsert?: Prisma.MessagesUpsertWithoutRepliesInput;
    disconnect?: Prisma.MessagesWhereInput | boolean;
    delete?: Prisma.MessagesWhereInput | boolean;
    connect?: Prisma.MessagesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MessagesUpdateToOneWithWhereWithoutRepliesInput, Prisma.MessagesUpdateWithoutRepliesInput>, Prisma.MessagesUncheckedUpdateWithoutRepliesInput>;
};
export type MessagesUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutMessageInput, Prisma.MessagesUncheckedCreateWithoutMessageInput> | Prisma.MessagesCreateWithoutMessageInput[] | Prisma.MessagesUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutMessageInput | Prisma.MessagesCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutMessageInput | Prisma.MessagesUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.MessagesCreateManyMessageInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutMessageInput | Prisma.MessagesUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutMessageInput | Prisma.MessagesUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutMessageInput, Prisma.MessagesUncheckedCreateWithoutMessageInput> | Prisma.MessagesCreateWithoutMessageInput[] | Prisma.MessagesUncheckedCreateWithoutMessageInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutMessageInput | Prisma.MessagesCreateOrConnectWithoutMessageInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutMessageInput | Prisma.MessagesUpsertWithWhereUniqueWithoutMessageInput[];
    createMany?: Prisma.MessagesCreateManyMessageInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutMessageInput | Prisma.MessagesUpdateWithWhereUniqueWithoutMessageInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutMessageInput | Prisma.MessagesUpdateManyWithWhereWithoutMessageInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesCreateNestedManyWithoutGroupChatInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutGroupChatInput, Prisma.MessagesUncheckedCreateWithoutGroupChatInput> | Prisma.MessagesCreateWithoutGroupChatInput[] | Prisma.MessagesUncheckedCreateWithoutGroupChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutGroupChatInput | Prisma.MessagesCreateOrConnectWithoutGroupChatInput[];
    createMany?: Prisma.MessagesCreateManyGroupChatInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUncheckedCreateNestedManyWithoutGroupChatInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutGroupChatInput, Prisma.MessagesUncheckedCreateWithoutGroupChatInput> | Prisma.MessagesCreateWithoutGroupChatInput[] | Prisma.MessagesUncheckedCreateWithoutGroupChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutGroupChatInput | Prisma.MessagesCreateOrConnectWithoutGroupChatInput[];
    createMany?: Prisma.MessagesCreateManyGroupChatInputEnvelope;
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
};
export type MessagesUpdateManyWithoutGroupChatNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutGroupChatInput, Prisma.MessagesUncheckedCreateWithoutGroupChatInput> | Prisma.MessagesCreateWithoutGroupChatInput[] | Prisma.MessagesUncheckedCreateWithoutGroupChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutGroupChatInput | Prisma.MessagesCreateOrConnectWithoutGroupChatInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutGroupChatInput | Prisma.MessagesUpsertWithWhereUniqueWithoutGroupChatInput[];
    createMany?: Prisma.MessagesCreateManyGroupChatInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutGroupChatInput | Prisma.MessagesUpdateWithWhereUniqueWithoutGroupChatInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutGroupChatInput | Prisma.MessagesUpdateManyWithWhereWithoutGroupChatInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesUncheckedUpdateManyWithoutGroupChatNestedInput = {
    create?: Prisma.XOR<Prisma.MessagesCreateWithoutGroupChatInput, Prisma.MessagesUncheckedCreateWithoutGroupChatInput> | Prisma.MessagesCreateWithoutGroupChatInput[] | Prisma.MessagesUncheckedCreateWithoutGroupChatInput[];
    connectOrCreate?: Prisma.MessagesCreateOrConnectWithoutGroupChatInput | Prisma.MessagesCreateOrConnectWithoutGroupChatInput[];
    upsert?: Prisma.MessagesUpsertWithWhereUniqueWithoutGroupChatInput | Prisma.MessagesUpsertWithWhereUniqueWithoutGroupChatInput[];
    createMany?: Prisma.MessagesCreateManyGroupChatInputEnvelope;
    set?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    disconnect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    delete?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    connect?: Prisma.MessagesWhereUniqueInput | Prisma.MessagesWhereUniqueInput[];
    update?: Prisma.MessagesUpdateWithWhereUniqueWithoutGroupChatInput | Prisma.MessagesUpdateWithWhereUniqueWithoutGroupChatInput[];
    updateMany?: Prisma.MessagesUpdateManyWithWhereWithoutGroupChatInput | Prisma.MessagesUpdateManyWithWhereWithoutGroupChatInput[];
    deleteMany?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
};
export type MessagesCreateWithoutSenderInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    directChat?: Prisma.DirectChatCreateNestedOneWithoutMessagesInput;
    groupChat?: Prisma.GroupChatCreateNestedOneWithoutMessagesInput;
    message?: Prisma.MessagesCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.MessagesCreateNestedManyWithoutMessageInput;
};
export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
    replies?: Prisma.MessagesUncheckedCreateNestedManyWithoutMessageInput;
};
export type MessagesCreateOrConnectWithoutSenderInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput>;
};
export type MessagesCreateManySenderInputEnvelope = {
    data: Prisma.MessagesCreateManySenderInput | Prisma.MessagesCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutSenderInput, Prisma.MessagesUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutSenderInput, Prisma.MessagesUncheckedCreateWithoutSenderInput>;
};
export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutSenderInput, Prisma.MessagesUncheckedUpdateWithoutSenderInput>;
};
export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.MessagesScalarWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyWithoutSenderInput>;
};
export type MessagesScalarWhereInput = {
    AND?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
    OR?: Prisma.MessagesScalarWhereInput[];
    NOT?: Prisma.MessagesScalarWhereInput | Prisma.MessagesScalarWhereInput[];
    id?: Prisma.StringFilter<"Messages"> | string;
    senderId?: Prisma.StringFilter<"Messages"> | string;
    read?: Prisma.BoolFilter<"Messages"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Messages"> | Date | string;
    directChatId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    groupId?: Prisma.StringNullableFilter<"Messages"> | string | null;
    content?: Prisma.StringNullableFilter<"Messages"> | string | null;
    fileUrl?: Prisma.StringNullableFilter<"Messages"> | string | null;
    voiceMessage?: Prisma.StringNullableFilter<"Messages"> | string | null;
    seen?: Prisma.BoolFilter<"Messages"> | boolean;
    messageId?: Prisma.StringNullableFilter<"Messages"> | string | null;
};
export type MessagesCreateWithoutDirectChatInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    sender: Prisma.UserCreateNestedOneWithoutMessagesInput;
    groupChat?: Prisma.GroupChatCreateNestedOneWithoutMessagesInput;
    message?: Prisma.MessagesCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.MessagesCreateNestedManyWithoutMessageInput;
};
export type MessagesUncheckedCreateWithoutDirectChatInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
    replies?: Prisma.MessagesUncheckedCreateNestedManyWithoutMessageInput;
};
export type MessagesCreateOrConnectWithoutDirectChatInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutDirectChatInput, Prisma.MessagesUncheckedCreateWithoutDirectChatInput>;
};
export type MessagesCreateManyDirectChatInputEnvelope = {
    data: Prisma.MessagesCreateManyDirectChatInput | Prisma.MessagesCreateManyDirectChatInput[];
    skipDuplicates?: boolean;
};
export type MessagesUpsertWithWhereUniqueWithoutDirectChatInput = {
    where: Prisma.MessagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutDirectChatInput, Prisma.MessagesUncheckedUpdateWithoutDirectChatInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutDirectChatInput, Prisma.MessagesUncheckedCreateWithoutDirectChatInput>;
};
export type MessagesUpdateWithWhereUniqueWithoutDirectChatInput = {
    where: Prisma.MessagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutDirectChatInput, Prisma.MessagesUncheckedUpdateWithoutDirectChatInput>;
};
export type MessagesUpdateManyWithWhereWithoutDirectChatInput = {
    where: Prisma.MessagesScalarWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyWithoutDirectChatInput>;
};
export type MessagesCreateWithoutRepliesInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    sender: Prisma.UserCreateNestedOneWithoutMessagesInput;
    directChat?: Prisma.DirectChatCreateNestedOneWithoutMessagesInput;
    groupChat?: Prisma.GroupChatCreateNestedOneWithoutMessagesInput;
    message?: Prisma.MessagesCreateNestedOneWithoutRepliesInput;
};
export type MessagesUncheckedCreateWithoutRepliesInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
};
export type MessagesCreateOrConnectWithoutRepliesInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutRepliesInput, Prisma.MessagesUncheckedCreateWithoutRepliesInput>;
};
export type MessagesCreateWithoutMessageInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    sender: Prisma.UserCreateNestedOneWithoutMessagesInput;
    directChat?: Prisma.DirectChatCreateNestedOneWithoutMessagesInput;
    groupChat?: Prisma.GroupChatCreateNestedOneWithoutMessagesInput;
    replies?: Prisma.MessagesCreateNestedManyWithoutMessageInput;
};
export type MessagesUncheckedCreateWithoutMessageInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    replies?: Prisma.MessagesUncheckedCreateNestedManyWithoutMessageInput;
};
export type MessagesCreateOrConnectWithoutMessageInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutMessageInput, Prisma.MessagesUncheckedCreateWithoutMessageInput>;
};
export type MessagesCreateManyMessageInputEnvelope = {
    data: Prisma.MessagesCreateManyMessageInput | Prisma.MessagesCreateManyMessageInput[];
    skipDuplicates?: boolean;
};
export type MessagesUpsertWithoutRepliesInput = {
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutRepliesInput, Prisma.MessagesUncheckedUpdateWithoutRepliesInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutRepliesInput, Prisma.MessagesUncheckedCreateWithoutRepliesInput>;
    where?: Prisma.MessagesWhereInput;
};
export type MessagesUpdateToOneWithWhereWithoutRepliesInput = {
    where?: Prisma.MessagesWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutRepliesInput, Prisma.MessagesUncheckedUpdateWithoutRepliesInput>;
};
export type MessagesUpdateWithoutRepliesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sender?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    directChat?: Prisma.DirectChatUpdateOneWithoutMessagesNestedInput;
    groupChat?: Prisma.GroupChatUpdateOneWithoutMessagesNestedInput;
    message?: Prisma.MessagesUpdateOneWithoutRepliesNestedInput;
};
export type MessagesUncheckedUpdateWithoutRepliesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessagesUpsertWithWhereUniqueWithoutMessageInput = {
    where: Prisma.MessagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutMessageInput, Prisma.MessagesUncheckedUpdateWithoutMessageInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutMessageInput, Prisma.MessagesUncheckedCreateWithoutMessageInput>;
};
export type MessagesUpdateWithWhereUniqueWithoutMessageInput = {
    where: Prisma.MessagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutMessageInput, Prisma.MessagesUncheckedUpdateWithoutMessageInput>;
};
export type MessagesUpdateManyWithWhereWithoutMessageInput = {
    where: Prisma.MessagesScalarWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyWithoutMessageInput>;
};
export type MessagesCreateWithoutGroupChatInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    sender: Prisma.UserCreateNestedOneWithoutMessagesInput;
    directChat?: Prisma.DirectChatCreateNestedOneWithoutMessagesInput;
    message?: Prisma.MessagesCreateNestedOneWithoutRepliesInput;
    replies?: Prisma.MessagesCreateNestedManyWithoutMessageInput;
};
export type MessagesUncheckedCreateWithoutGroupChatInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
    replies?: Prisma.MessagesUncheckedCreateNestedManyWithoutMessageInput;
};
export type MessagesCreateOrConnectWithoutGroupChatInput = {
    where: Prisma.MessagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutGroupChatInput, Prisma.MessagesUncheckedCreateWithoutGroupChatInput>;
};
export type MessagesCreateManyGroupChatInputEnvelope = {
    data: Prisma.MessagesCreateManyGroupChatInput | Prisma.MessagesCreateManyGroupChatInput[];
    skipDuplicates?: boolean;
};
export type MessagesUpsertWithWhereUniqueWithoutGroupChatInput = {
    where: Prisma.MessagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessagesUpdateWithoutGroupChatInput, Prisma.MessagesUncheckedUpdateWithoutGroupChatInput>;
    create: Prisma.XOR<Prisma.MessagesCreateWithoutGroupChatInput, Prisma.MessagesUncheckedCreateWithoutGroupChatInput>;
};
export type MessagesUpdateWithWhereUniqueWithoutGroupChatInput = {
    where: Prisma.MessagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessagesUpdateWithoutGroupChatInput, Prisma.MessagesUncheckedUpdateWithoutGroupChatInput>;
};
export type MessagesUpdateManyWithWhereWithoutGroupChatInput = {
    where: Prisma.MessagesScalarWhereInput;
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyWithoutGroupChatInput>;
};
export type MessagesCreateManySenderInput = {
    id?: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
};
export type MessagesUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    directChat?: Prisma.DirectChatUpdateOneWithoutMessagesNestedInput;
    groupChat?: Prisma.GroupChatUpdateOneWithoutMessagesNestedInput;
    message?: Prisma.MessagesUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.MessagesUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replies?: Prisma.MessagesUncheckedUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessagesCreateManyDirectChatInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
};
export type MessagesUpdateWithoutDirectChatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sender?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    groupChat?: Prisma.GroupChatUpdateOneWithoutMessagesNestedInput;
    message?: Prisma.MessagesUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.MessagesUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateWithoutDirectChatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replies?: Prisma.MessagesUncheckedUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateManyWithoutDirectChatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessagesCreateManyMessageInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    groupId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
};
export type MessagesUpdateWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sender?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    directChat?: Prisma.DirectChatUpdateOneWithoutMessagesNestedInput;
    groupChat?: Prisma.GroupChatUpdateOneWithoutMessagesNestedInput;
    replies?: Prisma.MessagesUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    replies?: Prisma.MessagesUncheckedUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateManyWithoutMessageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MessagesCreateManyGroupChatInput = {
    id?: string;
    senderId: string;
    read?: boolean;
    createdAt?: Date | string;
    directChatId?: string | null;
    content?: string | null;
    fileUrl?: string | null;
    voiceMessage?: string | null;
    seen?: boolean;
    messageId?: string | null;
};
export type MessagesUpdateWithoutGroupChatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sender?: Prisma.UserUpdateOneRequiredWithoutMessagesNestedInput;
    directChat?: Prisma.DirectChatUpdateOneWithoutMessagesNestedInput;
    message?: Prisma.MessagesUpdateOneWithoutRepliesNestedInput;
    replies?: Prisma.MessagesUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateWithoutGroupChatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    replies?: Prisma.MessagesUncheckedUpdateManyWithoutMessageNestedInput;
};
export type MessagesUncheckedUpdateManyWithoutGroupChatInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    directChatId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fileUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voiceMessage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seen?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    messageId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type MessagesCountOutputType
 */
export type MessagesCountOutputType = {
    replies: number;
};
export type MessagesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    replies?: boolean | MessagesCountOutputTypeCountRepliesArgs;
};
/**
 * MessagesCountOutputType without action
 */
export type MessagesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessagesCountOutputType
     */
    select?: Prisma.MessagesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MessagesCountOutputType without action
 */
export type MessagesCountOutputTypeCountRepliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
};
export type MessagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    read?: boolean;
    createdAt?: boolean;
    directChatId?: boolean;
    groupId?: boolean;
    content?: boolean;
    fileUrl?: boolean;
    voiceMessage?: boolean;
    seen?: boolean;
    messageId?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    directChat?: boolean | Prisma.Messages$directChatArgs<ExtArgs>;
    groupChat?: boolean | Prisma.Messages$groupChatArgs<ExtArgs>;
    message?: boolean | Prisma.Messages$messageArgs<ExtArgs>;
    replies?: boolean | Prisma.Messages$repliesArgs<ExtArgs>;
    _count?: boolean | Prisma.MessagesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type MessagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    read?: boolean;
    createdAt?: boolean;
    directChatId?: boolean;
    groupId?: boolean;
    content?: boolean;
    fileUrl?: boolean;
    voiceMessage?: boolean;
    seen?: boolean;
    messageId?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    directChat?: boolean | Prisma.Messages$directChatArgs<ExtArgs>;
    groupChat?: boolean | Prisma.Messages$groupChatArgs<ExtArgs>;
    message?: boolean | Prisma.Messages$messageArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type MessagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    senderId?: boolean;
    read?: boolean;
    createdAt?: boolean;
    directChatId?: boolean;
    groupId?: boolean;
    content?: boolean;
    fileUrl?: boolean;
    voiceMessage?: boolean;
    seen?: boolean;
    messageId?: boolean;
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    directChat?: boolean | Prisma.Messages$directChatArgs<ExtArgs>;
    groupChat?: boolean | Prisma.Messages$groupChatArgs<ExtArgs>;
    message?: boolean | Prisma.Messages$messageArgs<ExtArgs>;
}, ExtArgs["result"]["messages"]>;
export type MessagesSelectScalar = {
    id?: boolean;
    senderId?: boolean;
    read?: boolean;
    createdAt?: boolean;
    directChatId?: boolean;
    groupId?: boolean;
    content?: boolean;
    fileUrl?: boolean;
    voiceMessage?: boolean;
    seen?: boolean;
    messageId?: boolean;
};
export type MessagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "senderId" | "read" | "createdAt" | "directChatId" | "groupId" | "content" | "fileUrl" | "voiceMessage" | "seen" | "messageId", ExtArgs["result"]["messages"]>;
export type MessagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    directChat?: boolean | Prisma.Messages$directChatArgs<ExtArgs>;
    groupChat?: boolean | Prisma.Messages$groupChatArgs<ExtArgs>;
    message?: boolean | Prisma.Messages$messageArgs<ExtArgs>;
    replies?: boolean | Prisma.Messages$repliesArgs<ExtArgs>;
    _count?: boolean | Prisma.MessagesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MessagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    directChat?: boolean | Prisma.Messages$directChatArgs<ExtArgs>;
    groupChat?: boolean | Prisma.Messages$groupChatArgs<ExtArgs>;
    message?: boolean | Prisma.Messages$messageArgs<ExtArgs>;
};
export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    directChat?: boolean | Prisma.Messages$directChatArgs<ExtArgs>;
    groupChat?: boolean | Prisma.Messages$groupChatArgs<ExtArgs>;
    message?: boolean | Prisma.Messages$messageArgs<ExtArgs>;
};
export type $MessagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Messages";
    objects: {
        sender: Prisma.$UserPayload<ExtArgs>;
        directChat: Prisma.$DirectChatPayload<ExtArgs> | null;
        groupChat: Prisma.$GroupChatPayload<ExtArgs> | null;
        message: Prisma.$MessagesPayload<ExtArgs> | null;
        replies: Prisma.$MessagesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        senderId: string;
        read: boolean;
        createdAt: Date;
        directChatId: string | null;
        groupId: string | null;
        content: string | null;
        fileUrl: string | null;
        voiceMessage: string | null;
        seen: boolean;
        messageId: string | null;
    }, ExtArgs["result"]["messages"]>;
    composites: {};
};
export type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagesPayload, S>;
export type MessagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessagesCountAggregateInputType | true;
};
export interface MessagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Messages'];
        meta: {
            name: 'Messages';
        };
    };
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: Prisma.SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: Prisma.SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     *
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MessagesFindManyArgs>(args?: Prisma.SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     *
     */
    create<T extends MessagesCreateArgs>(args: Prisma.SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MessagesCreateManyArgs>(args?: Prisma.SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     *
     */
    delete<T extends MessagesDeleteArgs>(args: Prisma.SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MessagesUpdateArgs>(args: Prisma.SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: Prisma.SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: Prisma.SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(args?: Prisma.Subset<T, MessagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessagesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Prisma.Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>;
    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MessagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessagesGroupByArgs['orderBy'];
    } : {
        orderBy?: MessagesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Messages model
     */
    readonly fields: MessagesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Messages.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sender<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    directChat<T extends Prisma.Messages$directChatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Messages$directChatArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    groupChat<T extends Prisma.Messages$groupChatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Messages$groupChatArgs<ExtArgs>>): Prisma.Prisma__GroupChatClient<runtime.Types.Result.GetResult<Prisma.$GroupChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    message<T extends Prisma.Messages$messageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Messages$messageArgs<ExtArgs>>): Prisma.Prisma__MessagesClient<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    replies<T extends Prisma.Messages$repliesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Messages$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Messages model
 */
export interface MessagesFieldRefs {
    readonly id: Prisma.FieldRef<"Messages", 'String'>;
    readonly senderId: Prisma.FieldRef<"Messages", 'String'>;
    readonly read: Prisma.FieldRef<"Messages", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Messages", 'DateTime'>;
    readonly directChatId: Prisma.FieldRef<"Messages", 'String'>;
    readonly groupId: Prisma.FieldRef<"Messages", 'String'>;
    readonly content: Prisma.FieldRef<"Messages", 'String'>;
    readonly fileUrl: Prisma.FieldRef<"Messages", 'String'>;
    readonly voiceMessage: Prisma.FieldRef<"Messages", 'String'>;
    readonly seen: Prisma.FieldRef<"Messages", 'Boolean'>;
    readonly messageId: Prisma.FieldRef<"Messages", 'String'>;
}
/**
 * Messages findUnique
 */
export type MessagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where: Prisma.MessagesWhereUniqueInput;
};
/**
 * Messages findUniqueOrThrow
 */
export type MessagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where: Prisma.MessagesWhereUniqueInput;
};
/**
 * Messages findFirst
 */
export type MessagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: Prisma.MessagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
/**
 * Messages findFirstOrThrow
 */
export type MessagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Messages.
     */
    cursor?: Prisma.MessagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Messages.
     */
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
/**
 * Messages findMany
 */
export type MessagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * Filter, which Messages to fetch.
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Messages to fetch.
     */
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Messages.
     */
    cursor?: Prisma.MessagesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Messages.
     */
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
/**
 * Messages create
 */
export type MessagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * The data needed to create a Messages.
     */
    data: Prisma.XOR<Prisma.MessagesCreateInput, Prisma.MessagesUncheckedCreateInput>;
};
/**
 * Messages createMany
 */
export type MessagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: Prisma.MessagesCreateManyInput | Prisma.MessagesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Messages createManyAndReturn
 */
export type MessagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * The data used to create many Messages.
     */
    data: Prisma.MessagesCreateManyInput | Prisma.MessagesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Messages update
 */
export type MessagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * The data needed to update a Messages.
     */
    data: Prisma.XOR<Prisma.MessagesUpdateInput, Prisma.MessagesUncheckedUpdateInput>;
    /**
     * Choose, which Messages to update.
     */
    where: Prisma.MessagesWhereUniqueInput;
};
/**
 * Messages updateMany
 */
export type MessagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
};
/**
 * Messages updateManyAndReturn
 */
export type MessagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * The data used to update Messages.
     */
    data: Prisma.XOR<Prisma.MessagesUpdateManyMutationInput, Prisma.MessagesUncheckedUpdateManyInput>;
    /**
     * Filter which Messages to update
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * Limit how many Messages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Messages upsert
 */
export type MessagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: Prisma.MessagesWhereUniqueInput;
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: Prisma.XOR<Prisma.MessagesCreateInput, Prisma.MessagesUncheckedCreateInput>;
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MessagesUpdateInput, Prisma.MessagesUncheckedUpdateInput>;
};
/**
 * Messages delete
 */
export type MessagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    /**
     * Filter which Messages to delete.
     */
    where: Prisma.MessagesWhereUniqueInput;
};
/**
 * Messages deleteMany
 */
export type MessagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: Prisma.MessagesWhereInput;
    /**
     * Limit how many Messages to delete.
     */
    limit?: number;
};
/**
 * Messages.directChat
 */
export type Messages$directChatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectChat
     */
    select?: Prisma.DirectChatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the DirectChat
     */
    omit?: Prisma.DirectChatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DirectChatInclude<ExtArgs> | null;
    where?: Prisma.DirectChatWhereInput;
};
/**
 * Messages.groupChat
 */
export type Messages$groupChatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChat
     */
    select?: Prisma.GroupChatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroupChat
     */
    omit?: Prisma.GroupChatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GroupChatInclude<ExtArgs> | null;
    where?: Prisma.GroupChatWhereInput;
};
/**
 * Messages.message
 */
export type Messages$messageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where?: Prisma.MessagesWhereInput;
};
/**
 * Messages.replies
 */
export type Messages$repliesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
    where?: Prisma.MessagesWhereInput;
    orderBy?: Prisma.MessagesOrderByWithRelationInput | Prisma.MessagesOrderByWithRelationInput[];
    cursor?: Prisma.MessagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessagesScalarFieldEnum | Prisma.MessagesScalarFieldEnum[];
};
/**
 * Messages without action
 */
export type MessagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: Prisma.MessagesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Messages
     */
    omit?: Prisma.MessagesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MessagesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Messages.d.ts.map