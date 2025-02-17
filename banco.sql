PGDMP         5                z            system    14.2    14.2                 0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16427    system    DATABASE     f   CREATE DATABASE system WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE system;
                postgres    false            �            1259    24615    cost_centers    TABLE     ]   CREATE TABLE public.cost_centers (
    id integer NOT NULL,
    cost_center text NOT NULL
);
     DROP TABLE public.cost_centers;
       public         heap    postgres    false            �            1259    24614    cost_center_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cost_center_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.cost_center_id_seq;
       public          postgres    false    216                       0    0    cost_center_id_seq    SEQUENCE OWNED BY     J   ALTER SEQUENCE public.cost_center_id_seq OWNED BY public.cost_centers.id;
          public          postgres    false    215            �            1259    24606    departments    TABLE     t   CREATE TABLE public.departments (
    id integer NOT NULL,
    cost_center integer NOT NULL,
    department text
);
    DROP TABLE public.departments;
       public         heap    postgres    false            �            1259    24605    departments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.departments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.departments_id_seq;
       public          postgres    false    214                       0    0    departments_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.departments_id_seq OWNED BY public.departments.id;
          public          postgres    false    213            �            1259    24597    roles    TABLE     O   CREATE TABLE public.roles (
    id integer NOT NULL,
    role text NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    24596    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    212                       0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    211            �            1259    16429    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    department integer NOT NULL,
    role integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16428    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    210                       0    0    user_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;
          public          postgres    false    209            n           2604    24618    cost_centers id    DEFAULT     q   ALTER TABLE ONLY public.cost_centers ALTER COLUMN id SET DEFAULT nextval('public.cost_center_id_seq'::regclass);
 >   ALTER TABLE public.cost_centers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            m           2604    24609    departments id    DEFAULT     p   ALTER TABLE ONLY public.departments ALTER COLUMN id SET DEFAULT nextval('public.departments_id_seq'::regclass);
 =   ALTER TABLE public.departments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213    214            l           2604    24600    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            k           2604    16432    users id    DEFAULT     c   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            	          0    24615    cost_centers 
   TABLE DATA           7   COPY public.cost_centers (id, cost_center) FROM stdin;
    public          postgres    false    216   �                 0    24606    departments 
   TABLE DATA           B   COPY public.departments (id, cost_center, department) FROM stdin;
    public          postgres    false    214                     0    24597    roles 
   TABLE DATA           )   COPY public.roles (id, role) FROM stdin;
    public          postgres    false    212   ^                  0    16429    users 
   TABLE DATA           ;   COPY public.users (id, name, department, role) FROM stdin;
    public          postgres    false    210   �                   0    0    cost_center_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.cost_center_id_seq', 13, true);
          public          postgres    false    215                       0    0    departments_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.departments_id_seq', 29, true);
          public          postgres    false    213                       0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 16, true);
          public          postgres    false    211                       0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 89, true);
          public          postgres    false    209            v           2606    24622    cost_centers cost_center_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.cost_centers
    ADD CONSTRAINT cost_center_pkey PRIMARY KEY (id);
 G   ALTER TABLE ONLY public.cost_centers DROP CONSTRAINT cost_center_pkey;
       public            postgres    false    216            t           2606    24613    departments departments_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.departments DROP CONSTRAINT departments_pkey;
       public            postgres    false    214            r           2606    24604    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    212            p           2606    16436    users user_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    210            	      x�34�,IM����O�L����� :�E         L   x��1� �z�1F�D���6/��
�wfC�0!bh1o��LY��C;%!N�j�۬��pʁ1՞�y/$�^            x�34�t+��+Qp�K����� .�c            x�E˽�0���L�r���h�|� #7�C�Y�X
����اKʛ������w8�x}��F0GK%#,�
ny~�pk#�#�����'ă���ؓ�W�'��YO["�s�&�     