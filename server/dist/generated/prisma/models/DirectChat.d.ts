import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model DirectChat
 *
 */
export type DirectChatModel = runtime.Types.Result.DefaultSelection<Prisma.$DirectChatPayload>;
export type AggregateDirectChat = {
    _count: DirectChatCountAggregateOutputType | null;
    _min: DirectChatMinAggregateOutputType | null;
    _max: DirectChatMaxAggregateOutputType | null;
};
export type DirectChatMinAggregateOutputType = {
    id: string | null;
    user1Id: string | null;
    user2Id: string | null;
    createdAt: Date | null;
};
export type DirectChatMaxAggregateOutputType = {
    id: string | null;
    user1Id: string | null;
    user2Id: string | null;
    createdAt: Date | null;
};
export type DirectChatCountAggregateOutputType = {
    id: number;
    user1Id: number;
    user2Id: number;
    createdAt: number;
    _all: number;
};
export type DirectChatMinAggregateInputType = {
    id?: true;
    user1Id?: true;
    user2Id?: true;
    createdAt?: true;
};
export type DirectChatMaxAggregateInputType = {
    id?: true;
    user1Id?: true;
    user2Id?: true;
    createdAt?: true;
};
export type DirectChatCountAggregateInputType = {
    id?: true;
    user1Id?: true;
    user2Id?: true;
    createdAt?: true;
    _all?: true;
};
export type DirectChatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DirectChat to aggregate.
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DirectChats to fetch.
     */
    orderBy?: Prisma.DirectChatOrderByWithRelationInput | Prisma.DirectChatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.DirectChatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DirectChats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DirectChats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned DirectChats
    **/
    _count?: true | DirectChatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DirectChatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DirectChatMaxAggregateInputType;
};
export type GetDirectChatAggregateType<T extends DirectChatAggregateArgs> = {
    [P in keyof T & keyof AggregateDirectChat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDirectChat[P]> : Prisma.GetScalarType<T[P], AggregateDirectChat[P]>;
};
export type DirectChatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DirectChatWhereInput;
    orderBy?: Prisma.DirectChatOrderByWithAggregationInput | Prisma.DirectChatOrderByWithAggregationInput[];
    by: Prisma.DirectChatScalarFieldEnum[] | Prisma.DirectChatScalarFieldEnum;
    having?: Prisma.DirectChatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DirectChatCountAggregateInputType | true;
    _min?: DirectChatMinAggregateInputType;
    _max?: DirectChatMaxAggregateInputType;
};
export type DirectChatGroupByOutputType = {
    id: string;
    user1Id: string;
    user2Id: string;
    createdAt: Date;
    _count: DirectChatCountAggregateOutputType | null;
    _min: DirectChatMinAggregateOutputType | null;
    _max: DirectChatMaxAggregateOutputType | null;
};
type GetDirectChatGroupByPayload<T extends DirectChatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DirectChatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DirectChatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DirectChatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DirectChatGroupByOutputType[P]>;
}>>;
export type DirectChatWhereInput = {
    AND?: Prisma.DirectChatWhereInput | Prisma.DirectChatWhereInput[];
    OR?: Prisma.DirectChatWhereInput[];
    NOT?: Prisma.DirectChatWhereInput | Prisma.DirectChatWhereInput[];
    id?: Prisma.StringFilter<"DirectChat"> | string;
    user1Id?: Prisma.StringFilter<"DirectChat"> | string;
    user2Id?: Prisma.StringFilter<"DirectChat"> | string;
    createdAt?: Prisma.DateTimeFilter<"DirectChat"> | Date | string;
    user1?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    user2?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    messages?: Prisma.MessagesListRelationFilter;
};
export type DirectChatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user1Id?: Prisma.SortOrder;
    user2Id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user1?: Prisma.UserOrderByWithRelationInput;
    user2?: Prisma.UserOrderByWithRelationInput;
    messages?: Prisma.MessagesOrderByRelationAggregateInput;
};
export type DirectChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user1Id_user2Id?: Prisma.DirectChatUser1IdUser2IdCompoundUniqueInput;
    AND?: Prisma.DirectChatWhereInput | Prisma.DirectChatWhereInput[];
    OR?: Prisma.DirectChatWhereInput[];
    NOT?: Prisma.DirectChatWhereInput | Prisma.DirectChatWhereInput[];
    user1Id?: Prisma.StringFilter<"DirectChat"> | string;
    user2Id?: Prisma.StringFilter<"DirectChat"> | string;
    createdAt?: Prisma.DateTimeFilter<"DirectChat"> | Date | string;
    user1?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    user2?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    messages?: Prisma.MessagesListRelationFilter;
}, "id" | "user1Id_user2Id">;
export type DirectChatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user1Id?: Prisma.SortOrder;
    user2Id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DirectChatCountOrderByAggregateInput;
    _max?: Prisma.DirectChatMaxOrderByAggregateInput;
    _min?: Prisma.DirectChatMinOrderByAggregateInput;
};
export type DirectChatScalarWhereWithAggregatesInput = {
    AND?: Prisma.DirectChatScalarWhereWithAggregatesInput | Prisma.DirectChatScalarWhereWithAggregatesInput[];
    OR?: Prisma.DirectChatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DirectChatScalarWhereWithAggregatesInput | Prisma.DirectChatScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DirectChat"> | string;
    user1Id?: Prisma.StringWithAggregatesFilter<"DirectChat"> | string;
    user2Id?: Prisma.StringWithAggregatesFilter<"DirectChat"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DirectChat"> | Date | string;
};
export type DirectChatCreateInput = {
    id?: string;
    createdAt?: Date | string;
    user1: Prisma.UserCreateNestedOneWithoutDirectChatAsUser1Input;
    user2: Prisma.UserCreateNestedOneWithoutDirectChatAsUser2Input;
    messages?: Prisma.MessagesCreateNestedManyWithoutDirectChatInput;
};
export type DirectChatUncheckedCreateInput = {
    id?: string;
    user1Id: string;
    user2Id: string;
    createdAt?: Date | string;
    messages?: Prisma.MessagesUncheckedCreateNestedManyWithoutDirectChatInput;
};
export type DirectChatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user1?: Prisma.UserUpdateOneRequiredWithoutDirectChatAsUser1NestedInput;
    user2?: Prisma.UserUpdateOneRequiredWithoutDirectChatAsUser2NestedInput;
    messages?: Prisma.MessagesUpdateManyWithoutDirectChatNestedInput;
};
export type DirectChatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user1Id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessagesUncheckedUpdateManyWithoutDirectChatNestedInput;
};
export type DirectChatCreateManyInput = {
    id?: string;
    user1Id: string;
    user2Id: string;
    createdAt?: Date | string;
};
export type DirectChatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DirectChatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user1Id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DirectChatListRelationFilter = {
    every?: Prisma.DirectChatWhereInput;
    some?: Prisma.DirectChatWhereInput;
    none?: Prisma.DirectChatWhereInput;
};
export type DirectChatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DirectChatUser1IdUser2IdCompoundUniqueInput = {
    user1Id: string;
    user2Id: string;
};
export type DirectChatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user1Id?: Prisma.SortOrder;
    user2Id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DirectChatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user1Id?: Prisma.SortOrder;
    user2Id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DirectChatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user1Id?: Prisma.SortOrder;
    user2Id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DirectChatNullableScalarRelationFilter = {
    is?: Prisma.DirectChatWhereInput | null;
    isNot?: Prisma.DirectChatWhereInput | null;
};
export type DirectChatCreateNestedManyWithoutUser1Input = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser1Input, Prisma.DirectChatUncheckedCreateWithoutUser1Input> | Prisma.DirectChatCreateWithoutUser1Input[] | Prisma.DirectChatUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser1Input | Prisma.DirectChatCreateOrConnectWithoutUser1Input[];
    createMany?: Prisma.DirectChatCreateManyUser1InputEnvelope;
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
};
export type DirectChatCreateNestedManyWithoutUser2Input = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser2Input, Prisma.DirectChatUncheckedCreateWithoutUser2Input> | Prisma.DirectChatCreateWithoutUser2Input[] | Prisma.DirectChatUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser2Input | Prisma.DirectChatCreateOrConnectWithoutUser2Input[];
    createMany?: Prisma.DirectChatCreateManyUser2InputEnvelope;
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
};
export type DirectChatUncheckedCreateNestedManyWithoutUser1Input = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser1Input, Prisma.DirectChatUncheckedCreateWithoutUser1Input> | Prisma.DirectChatCreateWithoutUser1Input[] | Prisma.DirectChatUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser1Input | Prisma.DirectChatCreateOrConnectWithoutUser1Input[];
    createMany?: Prisma.DirectChatCreateManyUser1InputEnvelope;
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
};
export type DirectChatUncheckedCreateNestedManyWithoutUser2Input = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser2Input, Prisma.DirectChatUncheckedCreateWithoutUser2Input> | Prisma.DirectChatCreateWithoutUser2Input[] | Prisma.DirectChatUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser2Input | Prisma.DirectChatCreateOrConnectWithoutUser2Input[];
    createMany?: Prisma.DirectChatCreateManyUser2InputEnvelope;
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
};
export type DirectChatUpdateManyWithoutUser1NestedInput = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser1Input, Prisma.DirectChatUncheckedCreateWithoutUser1Input> | Prisma.DirectChatCreateWithoutUser1Input[] | Prisma.DirectChatUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser1Input | Prisma.DirectChatCreateOrConnectWithoutUser1Input[];
    upsert?: Prisma.DirectChatUpsertWithWhereUniqueWithoutUser1Input | Prisma.DirectChatUpsertWithWhereUniqueWithoutUser1Input[];
    createMany?: Prisma.DirectChatCreateManyUser1InputEnvelope;
    set?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    disconnect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    delete?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    update?: Prisma.DirectChatUpdateWithWhereUniqueWithoutUser1Input | Prisma.DirectChatUpdateWithWhereUniqueWithoutUser1Input[];
    updateMany?: Prisma.DirectChatUpdateManyWithWhereWithoutUser1Input | Prisma.DirectChatUpdateManyWithWhereWithoutUser1Input[];
    deleteMany?: Prisma.DirectChatScalarWhereInput | Prisma.DirectChatScalarWhereInput[];
};
export type DirectChatUpdateManyWithoutUser2NestedInput = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser2Input, Prisma.DirectChatUncheckedCreateWithoutUser2Input> | Prisma.DirectChatCreateWithoutUser2Input[] | Prisma.DirectChatUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser2Input | Prisma.DirectChatCreateOrConnectWithoutUser2Input[];
    upsert?: Prisma.DirectChatUpsertWithWhereUniqueWithoutUser2Input | Prisma.DirectChatUpsertWithWhereUniqueWithoutUser2Input[];
    createMany?: Prisma.DirectChatCreateManyUser2InputEnvelope;
    set?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    disconnect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    delete?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    update?: Prisma.DirectChatUpdateWithWhereUniqueWithoutUser2Input | Prisma.DirectChatUpdateWithWhereUniqueWithoutUser2Input[];
    updateMany?: Prisma.DirectChatUpdateManyWithWhereWithoutUser2Input | Prisma.DirectChatUpdateManyWithWhereWithoutUser2Input[];
    deleteMany?: Prisma.DirectChatScalarWhereInput | Prisma.DirectChatScalarWhereInput[];
};
export type DirectChatUncheckedUpdateManyWithoutUser1NestedInput = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser1Input, Prisma.DirectChatUncheckedCreateWithoutUser1Input> | Prisma.DirectChatCreateWithoutUser1Input[] | Prisma.DirectChatUncheckedCreateWithoutUser1Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser1Input | Prisma.DirectChatCreateOrConnectWithoutUser1Input[];
    upsert?: Prisma.DirectChatUpsertWithWhereUniqueWithoutUser1Input | Prisma.DirectChatUpsertWithWhereUniqueWithoutUser1Input[];
    createMany?: Prisma.DirectChatCreateManyUser1InputEnvelope;
    set?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    disconnect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    delete?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    update?: Prisma.DirectChatUpdateWithWhereUniqueWithoutUser1Input | Prisma.DirectChatUpdateWithWhereUniqueWithoutUser1Input[];
    updateMany?: Prisma.DirectChatUpdateManyWithWhereWithoutUser1Input | Prisma.DirectChatUpdateManyWithWhereWithoutUser1Input[];
    deleteMany?: Prisma.DirectChatScalarWhereInput | Prisma.DirectChatScalarWhereInput[];
};
export type DirectChatUncheckedUpdateManyWithoutUser2NestedInput = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutUser2Input, Prisma.DirectChatUncheckedCreateWithoutUser2Input> | Prisma.DirectChatCreateWithoutUser2Input[] | Prisma.DirectChatUncheckedCreateWithoutUser2Input[];
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutUser2Input | Prisma.DirectChatCreateOrConnectWithoutUser2Input[];
    upsert?: Prisma.DirectChatUpsertWithWhereUniqueWithoutUser2Input | Prisma.DirectChatUpsertWithWhereUniqueWithoutUser2Input[];
    createMany?: Prisma.DirectChatCreateManyUser2InputEnvelope;
    set?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    disconnect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    delete?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    connect?: Prisma.DirectChatWhereUniqueInput | Prisma.DirectChatWhereUniqueInput[];
    update?: Prisma.DirectChatUpdateWithWhereUniqueWithoutUser2Input | Prisma.DirectChatUpdateWithWhereUniqueWithoutUser2Input[];
    updateMany?: Prisma.DirectChatUpdateManyWithWhereWithoutUser2Input | Prisma.DirectChatUpdateManyWithWhereWithoutUser2Input[];
    deleteMany?: Prisma.DirectChatScalarWhereInput | Prisma.DirectChatScalarWhereInput[];
};
export type DirectChatCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutMessagesInput, Prisma.DirectChatUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.DirectChatWhereUniqueInput;
};
export type DirectChatUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.DirectChatCreateWithoutMessagesInput, Prisma.DirectChatUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.DirectChatCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.DirectChatUpsertWithoutMessagesInput;
    disconnect?: Prisma.DirectChatWhereInput | boolean;
    delete?: Prisma.DirectChatWhereInput | boolean;
    connect?: Prisma.DirectChatWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DirectChatUpdateToOneWithWhereWithoutMessagesInput, Prisma.DirectChatUpdateWithoutMessagesInput>, Prisma.DirectChatUncheckedUpdateWithoutMessagesInput>;
};
export type DirectChatCreateWithoutUser1Input = {
    id?: string;
    createdAt?: Date | string;
    user2: Prisma.UserCreateNestedOneWithoutDirectChatAsUser2Input;
    messages?: Prisma.MessagesCreateNestedManyWithoutDirectChatInput;
};
export type DirectChatUncheckedCreateWithoutUser1Input = {
    id?: string;
    user2Id: string;
    createdAt?: Date | string;
    messages?: Prisma.MessagesUncheckedCreateNestedManyWithoutDirectChatInput;
};
export type DirectChatCreateOrConnectWithoutUser1Input = {
    where: Prisma.DirectChatWhereUniqueInput;
    create: Prisma.XOR<Prisma.DirectChatCreateWithoutUser1Input, Prisma.DirectChatUncheckedCreateWithoutUser1Input>;
};
export type DirectChatCreateManyUser1InputEnvelope = {
    data: Prisma.DirectChatCreateManyUser1Input | Prisma.DirectChatCreateManyUser1Input[];
    skipDuplicates?: boolean;
};
export type DirectChatCreateWithoutUser2Input = {
    id?: string;
    createdAt?: Date | string;
    user1: Prisma.UserCreateNestedOneWithoutDirectChatAsUser1Input;
    messages?: Prisma.MessagesCreateNestedManyWithoutDirectChatInput;
};
export type DirectChatUncheckedCreateWithoutUser2Input = {
    id?: string;
    user1Id: string;
    createdAt?: Date | string;
    messages?: Prisma.MessagesUncheckedCreateNestedManyWithoutDirectChatInput;
};
export type DirectChatCreateOrConnectWithoutUser2Input = {
    where: Prisma.DirectChatWhereUniqueInput;
    create: Prisma.XOR<Prisma.DirectChatCreateWithoutUser2Input, Prisma.DirectChatUncheckedCreateWithoutUser2Input>;
};
export type DirectChatCreateManyUser2InputEnvelope = {
    data: Prisma.DirectChatCreateManyUser2Input | Prisma.DirectChatCreateManyUser2Input[];
    skipDuplicates?: boolean;
};
export type DirectChatUpsertWithWhereUniqueWithoutUser1Input = {
    where: Prisma.DirectChatWhereUniqueInput;
    update: Prisma.XOR<Prisma.DirectChatUpdateWithoutUser1Input, Prisma.DirectChatUncheckedUpdateWithoutUser1Input>;
    create: Prisma.XOR<Prisma.DirectChatCreateWithoutUser1Input, Prisma.DirectChatUncheckedCreateWithoutUser1Input>;
};
export type DirectChatUpdateWithWhereUniqueWithoutUser1Input = {
    where: Prisma.DirectChatWhereUniqueInput;
    data: Prisma.XOR<Prisma.DirectChatUpdateWithoutUser1Input, Prisma.DirectChatUncheckedUpdateWithoutUser1Input>;
};
export type DirectChatUpdateManyWithWhereWithoutUser1Input = {
    where: Prisma.DirectChatScalarWhereInput;
    data: Prisma.XOR<Prisma.DirectChatUpdateManyMutationInput, Prisma.DirectChatUncheckedUpdateManyWithoutUser1Input>;
};
export type DirectChatScalarWhereInput = {
    AND?: Prisma.DirectChatScalarWhereInput | Prisma.DirectChatScalarWhereInput[];
    OR?: Prisma.DirectChatScalarWhereInput[];
    NOT?: Prisma.DirectChatScalarWhereInput | Prisma.DirectChatScalarWhereInput[];
    id?: Prisma.StringFilter<"DirectChat"> | string;
    user1Id?: Prisma.StringFilter<"DirectChat"> | string;
    user2Id?: Prisma.StringFilter<"DirectChat"> | string;
    createdAt?: Prisma.DateTimeFilter<"DirectChat"> | Date | string;
};
export type DirectChatUpsertWithWhereUniqueWithoutUser2Input = {
    where: Prisma.DirectChatWhereUniqueInput;
    update: Prisma.XOR<Prisma.DirectChatUpdateWithoutUser2Input, Prisma.DirectChatUncheckedUpdateWithoutUser2Input>;
    create: Prisma.XOR<Prisma.DirectChatCreateWithoutUser2Input, Prisma.DirectChatUncheckedCreateWithoutUser2Input>;
};
export type DirectChatUpdateWithWhereUniqueWithoutUser2Input = {
    where: Prisma.DirectChatWhereUniqueInput;
    data: Prisma.XOR<Prisma.DirectChatUpdateWithoutUser2Input, Prisma.DirectChatUncheckedUpdateWithoutUser2Input>;
};
export type DirectChatUpdateManyWithWhereWithoutUser2Input = {
    where: Prisma.DirectChatScalarWhereInput;
    data: Prisma.XOR<Prisma.DirectChatUpdateManyMutationInput, Prisma.DirectChatUncheckedUpdateManyWithoutUser2Input>;
};
export type DirectChatCreateWithoutMessagesInput = {
    id?: string;
    createdAt?: Date | string;
    user1: Prisma.UserCreateNestedOneWithoutDirectChatAsUser1Input;
    user2: Prisma.UserCreateNestedOneWithoutDirectChatAsUser2Input;
};
export type DirectChatUncheckedCreateWithoutMessagesInput = {
    id?: string;
    user1Id: string;
    user2Id: string;
    createdAt?: Date | string;
};
export type DirectChatCreateOrConnectWithoutMessagesInput = {
    where: Prisma.DirectChatWhereUniqueInput;
    create: Prisma.XOR<Prisma.DirectChatCreateWithoutMessagesInput, Prisma.DirectChatUncheckedCreateWithoutMessagesInput>;
};
export type DirectChatUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.DirectChatUpdateWithoutMessagesInput, Prisma.DirectChatUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.DirectChatCreateWithoutMessagesInput, Prisma.DirectChatUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.DirectChatWhereInput;
};
export type DirectChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.DirectChatWhereInput;
    data: Prisma.XOR<Prisma.DirectChatUpdateWithoutMessagesInput, Prisma.DirectChatUncheckedUpdateWithoutMessagesInput>;
};
export type DirectChatUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user1?: Prisma.UserUpdateOneRequiredWithoutDirectChatAsUser1NestedInput;
    user2?: Prisma.UserUpdateOneRequiredWithoutDirectChatAsUser2NestedInput;
};
export type DirectChatUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user1Id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DirectChatCreateManyUser1Input = {
    id?: string;
    user2Id: string;
    createdAt?: Date | string;
};
export type DirectChatCreateManyUser2Input = {
    id?: string;
    user1Id: string;
    createdAt?: Date | string;
};
export type DirectChatUpdateWithoutUser1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user2?: Prisma.UserUpdateOneRequiredWithoutDirectChatAsUser2NestedInput;
    messages?: Prisma.MessagesUpdateManyWithoutDirectChatNestedInput;
};
export type DirectChatUncheckedUpdateWithoutUser1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessagesUncheckedUpdateManyWithoutDirectChatNestedInput;
};
export type DirectChatUncheckedUpdateManyWithoutUser1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user2Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DirectChatUpdateWithoutUser2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user1?: Prisma.UserUpdateOneRequiredWithoutDirectChatAsUser1NestedInput;
    messages?: Prisma.MessagesUpdateManyWithoutDirectChatNestedInput;
};
export type DirectChatUncheckedUpdateWithoutUser2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user1Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    messages?: Prisma.MessagesUncheckedUpdateManyWithoutDirectChatNestedInput;
};
export type DirectChatUncheckedUpdateManyWithoutUser2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user1Id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type DirectChatCountOutputType
 */
export type DirectChatCountOutputType = {
    messages: number;
};
export type DirectChatCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | DirectChatCountOutputTypeCountMessagesArgs;
};
/**
 * DirectChatCountOutputType without action
 */
export type DirectChatCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectChatCountOutputType
     */
    select?: Prisma.DirectChatCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DirectChatCountOutputType without action
 */
export type DirectChatCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessagesWhereInput;
};
export type DirectChatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user1Id?: boolean;
    user2Id?: boolean;
    createdAt?: boolean;
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.DirectChat$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.DirectChatCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["directChat"]>;
export type DirectChatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user1Id?: boolean;
    user2Id?: boolean;
    createdAt?: boolean;
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["directChat"]>;
export type DirectChatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user1Id?: boolean;
    user2Id?: boolean;
    createdAt?: boolean;
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["directChat"]>;
export type DirectChatSelectScalar = {
    id?: boolean;
    user1Id?: boolean;
    user2Id?: boolean;
    createdAt?: boolean;
};
export type DirectChatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user1Id" | "user2Id" | "createdAt", ExtArgs["result"]["directChat"]>;
export type DirectChatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.DirectChat$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.DirectChatCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DirectChatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type DirectChatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user1?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    user2?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $DirectChatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DirectChat";
    objects: {
        user1: Prisma.$UserPayload<ExtArgs>;
        user2: Prisma.$UserPayload<ExtArgs>;
        messages: Prisma.$MessagesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user1Id: string;
        user2Id: string;
        createdAt: Date;
    }, ExtArgs["result"]["directChat"]>;
    composites: {};
};
export type DirectChatGetPayload<S extends boolean | null | undefined | DirectChatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DirectChatPayload, S>;
export type DirectChatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DirectChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DirectChatCountAggregateInputType | true;
};
export interface DirectChatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DirectChat'];
        meta: {
            name: 'DirectChat';
        };
    };
    /**
     * Find zero or one DirectChat that matches the filter.
     * @param {DirectChatFindUniqueArgs} args - Arguments to find a DirectChat
     * @example
     * // Get one DirectChat
     * const directChat = await prisma.directChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectChatFindUniqueArgs>(args: Prisma.SelectSubset<T, DirectChatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one DirectChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectChatFindUniqueOrThrowArgs} args - Arguments to find a DirectChat
     * @example
     * // Get one DirectChat
     * const directChat = await prisma.directChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectChatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DirectChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DirectChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatFindFirstArgs} args - Arguments to find a DirectChat
     * @example
     * // Get one DirectChat
     * const directChat = await prisma.directChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectChatFindFirstArgs>(args?: Prisma.SelectSubset<T, DirectChatFindFirstArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first DirectChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatFindFirstOrThrowArgs} args - Arguments to find a DirectChat
     * @example
     * // Get one DirectChat
     * const directChat = await prisma.directChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectChatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DirectChatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more DirectChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectChats
     * const directChats = await prisma.directChat.findMany()
     *
     * // Get first 10 DirectChats
     * const directChats = await prisma.directChat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const directChatWithIdOnly = await prisma.directChat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends DirectChatFindManyArgs>(args?: Prisma.SelectSubset<T, DirectChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a DirectChat.
     * @param {DirectChatCreateArgs} args - Arguments to create a DirectChat.
     * @example
     * // Create one DirectChat
     * const DirectChat = await prisma.directChat.create({
     *   data: {
     *     // ... data to create a DirectChat
     *   }
     * })
     *
     */
    create<T extends DirectChatCreateArgs>(args: Prisma.SelectSubset<T, DirectChatCreateArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many DirectChats.
     * @param {DirectChatCreateManyArgs} args - Arguments to create many DirectChats.
     * @example
     * // Create many DirectChats
     * const directChat = await prisma.directChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends DirectChatCreateManyArgs>(args?: Prisma.SelectSubset<T, DirectChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many DirectChats and returns the data saved in the database.
     * @param {DirectChatCreateManyAndReturnArgs} args - Arguments to create many DirectChats.
     * @example
     * // Create many DirectChats
     * const directChat = await prisma.directChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many DirectChats and only return the `id`
     * const directChatWithIdOnly = await prisma.directChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends DirectChatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DirectChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a DirectChat.
     * @param {DirectChatDeleteArgs} args - Arguments to delete one DirectChat.
     * @example
     * // Delete one DirectChat
     * const DirectChat = await prisma.directChat.delete({
     *   where: {
     *     // ... filter to delete one DirectChat
     *   }
     * })
     *
     */
    delete<T extends DirectChatDeleteArgs>(args: Prisma.SelectSubset<T, DirectChatDeleteArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one DirectChat.
     * @param {DirectChatUpdateArgs} args - Arguments to update one DirectChat.
     * @example
     * // Update one DirectChat
     * const directChat = await prisma.directChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends DirectChatUpdateArgs>(args: Prisma.SelectSubset<T, DirectChatUpdateArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more DirectChats.
     * @param {DirectChatDeleteManyArgs} args - Arguments to filter DirectChats to delete.
     * @example
     * // Delete a few DirectChats
     * const { count } = await prisma.directChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends DirectChatDeleteManyArgs>(args?: Prisma.SelectSubset<T, DirectChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DirectChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectChats
     * const directChat = await prisma.directChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends DirectChatUpdateManyArgs>(args: Prisma.SelectSubset<T, DirectChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more DirectChats and returns the data updated in the database.
     * @param {DirectChatUpdateManyAndReturnArgs} args - Arguments to update many DirectChats.
     * @example
     * // Update many DirectChats
     * const directChat = await prisma.directChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more DirectChats and only return the `id`
     * const directChatWithIdOnly = await prisma.directChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends DirectChatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DirectChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one DirectChat.
     * @param {DirectChatUpsertArgs} args - Arguments to update or create a DirectChat.
     * @example
     * // Update or create a DirectChat
     * const directChat = await prisma.directChat.upsert({
     *   create: {
     *     // ... data to create a DirectChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectChat we want to update
     *   }
     * })
     */
    upsert<T extends DirectChatUpsertArgs>(args: Prisma.SelectSubset<T, DirectChatUpsertArgs<ExtArgs>>): Prisma.Prisma__DirectChatClient<runtime.Types.Result.GetResult<Prisma.$DirectChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of DirectChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatCountArgs} args - Arguments to filter DirectChats to count.
     * @example
     * // Count the number of DirectChats
     * const count = await prisma.directChat.count({
     *   where: {
     *     // ... the filter for the DirectChats we want to count
     *   }
     * })
    **/
    count<T extends DirectChatCountArgs>(args?: Prisma.Subset<T, DirectChatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DirectChatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a DirectChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectChatAggregateArgs>(args: Prisma.Subset<T, DirectChatAggregateArgs>): Prisma.PrismaPromise<GetDirectChatAggregateType<T>>;
    /**
     * Group by DirectChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectChatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends DirectChatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DirectChatGroupByArgs['orderBy'];
    } : {
        orderBy?: DirectChatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DirectChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the DirectChat model
     */
    readonly fields: DirectChatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for DirectChat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__DirectChatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user1<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user2<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.DirectChat$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DirectChat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the DirectChat model
 */
export interface DirectChatFieldRefs {
    readonly id: Prisma.FieldRef<"DirectChat", 'String'>;
    readonly user1Id: Prisma.FieldRef<"DirectChat", 'String'>;
    readonly user2Id: Prisma.FieldRef<"DirectChat", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DirectChat", 'DateTime'>;
}
/**
 * DirectChat findUnique
 */
export type DirectChatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DirectChat to fetch.
     */
    where: Prisma.DirectChatWhereUniqueInput;
};
/**
 * DirectChat findUniqueOrThrow
 */
export type DirectChatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DirectChat to fetch.
     */
    where: Prisma.DirectChatWhereUniqueInput;
};
/**
 * DirectChat findFirst
 */
export type DirectChatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DirectChat to fetch.
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DirectChats to fetch.
     */
    orderBy?: Prisma.DirectChatOrderByWithRelationInput | Prisma.DirectChatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DirectChats.
     */
    cursor?: Prisma.DirectChatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DirectChats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DirectChats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DirectChats.
     */
    distinct?: Prisma.DirectChatScalarFieldEnum | Prisma.DirectChatScalarFieldEnum[];
};
/**
 * DirectChat findFirstOrThrow
 */
export type DirectChatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DirectChat to fetch.
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DirectChats to fetch.
     */
    orderBy?: Prisma.DirectChatOrderByWithRelationInput | Prisma.DirectChatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for DirectChats.
     */
    cursor?: Prisma.DirectChatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DirectChats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DirectChats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of DirectChats.
     */
    distinct?: Prisma.DirectChatScalarFieldEnum | Prisma.DirectChatScalarFieldEnum[];
};
/**
 * DirectChat findMany
 */
export type DirectChatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which DirectChats to fetch.
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of DirectChats to fetch.
     */
    orderBy?: Prisma.DirectChatOrderByWithRelationInput | Prisma.DirectChatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing DirectChats.
     */
    cursor?: Prisma.DirectChatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` DirectChats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` DirectChats.
     */
    skip?: number;
    distinct?: Prisma.DirectChatScalarFieldEnum | Prisma.DirectChatScalarFieldEnum[];
};
/**
 * DirectChat create
 */
export type DirectChatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a DirectChat.
     */
    data: Prisma.XOR<Prisma.DirectChatCreateInput, Prisma.DirectChatUncheckedCreateInput>;
};
/**
 * DirectChat createMany
 */
export type DirectChatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectChats.
     */
    data: Prisma.DirectChatCreateManyInput | Prisma.DirectChatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * DirectChat createManyAndReturn
 */
export type DirectChatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectChat
     */
    select?: Prisma.DirectChatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DirectChat
     */
    omit?: Prisma.DirectChatOmit<ExtArgs> | null;
    /**
     * The data used to create many DirectChats.
     */
    data: Prisma.DirectChatCreateManyInput | Prisma.DirectChatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DirectChatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * DirectChat update
 */
export type DirectChatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a DirectChat.
     */
    data: Prisma.XOR<Prisma.DirectChatUpdateInput, Prisma.DirectChatUncheckedUpdateInput>;
    /**
     * Choose, which DirectChat to update.
     */
    where: Prisma.DirectChatWhereUniqueInput;
};
/**
 * DirectChat updateMany
 */
export type DirectChatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectChats.
     */
    data: Prisma.XOR<Prisma.DirectChatUpdateManyMutationInput, Prisma.DirectChatUncheckedUpdateManyInput>;
    /**
     * Filter which DirectChats to update
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * Limit how many DirectChats to update.
     */
    limit?: number;
};
/**
 * DirectChat updateManyAndReturn
 */
export type DirectChatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectChat
     */
    select?: Prisma.DirectChatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the DirectChat
     */
    omit?: Prisma.DirectChatOmit<ExtArgs> | null;
    /**
     * The data used to update DirectChats.
     */
    data: Prisma.XOR<Prisma.DirectChatUpdateManyMutationInput, Prisma.DirectChatUncheckedUpdateManyInput>;
    /**
     * Filter which DirectChats to update
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * Limit how many DirectChats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DirectChatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * DirectChat upsert
 */
export type DirectChatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the DirectChat to update in case it exists.
     */
    where: Prisma.DirectChatWhereUniqueInput;
    /**
     * In case the DirectChat found by the `where` argument doesn't exist, create a new DirectChat with this data.
     */
    create: Prisma.XOR<Prisma.DirectChatCreateInput, Prisma.DirectChatUncheckedCreateInput>;
    /**
     * In case the DirectChat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.DirectChatUpdateInput, Prisma.DirectChatUncheckedUpdateInput>;
};
/**
 * DirectChat delete
 */
export type DirectChatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which DirectChat to delete.
     */
    where: Prisma.DirectChatWhereUniqueInput;
};
/**
 * DirectChat deleteMany
 */
export type DirectChatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which DirectChats to delete
     */
    where?: Prisma.DirectChatWhereInput;
    /**
     * Limit how many DirectChats to delete.
     */
    limit?: number;
};
/**
 * DirectChat.messages
 */
export type DirectChat$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * DirectChat without action
 */
export type DirectChatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=DirectChat.d.ts.map